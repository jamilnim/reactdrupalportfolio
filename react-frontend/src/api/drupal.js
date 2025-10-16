const BASE =
  import.meta.env.VITE_DRUPAL_BASE || "https://drupal-portfolio.lndo.site";

/**
 * Normalise various possible Drupal JSON:API link shapes into a usable URL string.
 * Handles:
 *  - string URL
 *  - object { uri: 'http...'} or { uri: 'internal:/path' }
 *  - array of such objects
 *  - object with `url` property
 */
function extractUrl(linkField) {
  if (!linkField) return "";

  // If string already
  if (typeof linkField === "string") {
    return linkField;
  }

  // If array, pick first
  if (Array.isArray(linkField) && linkField.length > 0) {
    return extractUrl(linkField[0]);
  }

  // If object with uri (typical Drupal link field)
  if (typeof linkField === "object") {
    // Drupal often provides { uri: 'internal:/node/1' } or { uri: 'https://...' }
    if (linkField.uri) {
      const uri = linkField.uri;
      // internal:uris -> convert to absolute by prefixing base
      if (typeof uri === "string" && uri.startsWith("internal:")) {
        const path = uri.replace(/^internal:/, "");
        // ensure path starts with slash
        return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
      }
      return uri;
    }

    // some APIs use .url
    if (linkField.url) return linkField.url;

    // sometimes there's direct 'value' or 'target' keys
    if (linkField.value) return linkField.value;
    if (linkField.target) return linkField.target;
  }

  return "";
}

export async function fetchProjects() {
  const response = await fetch(
    `${BASE}/jsonapi/node/project?include=field_image`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await response.json();
  const included = data.included || [];

  const projects = data.data.map((p) => {
    const attrs = p.attributes || {};

    // Find image (if exists). Support single or multi-value image fields.
    let imgId = null;
    const imgRel = p.relationships?.field_image?.data;
    if (Array.isArray(imgRel)) {
      imgId = imgRel[0]?.id;
    } else {
      imgId = imgRel?.id;
    }
    const imgData = included.find((item) => item.id === imgId);
    const imageUrl =
      imgData && imgData.attributes?.uri?.url
        ? // if Drupal returns full url use it, else prefix BASE
          imgData.attributes.uri.url.startsWith("http")
          ? imgData.attributes.uri.url
          : `${BASE}${imgData.attributes.uri.url}`
        : null;

    return {
      id: p.id,
      title: attrs.title || "",
      summary: attrs.field_project_summary?.processed || "",
      // Use extractUrl to make sure we return a string for the href
      github: extractUrl(attrs.field_github_link) || "",
      deploy: extractUrl(attrs.field_deploy_link) || "",
      body: attrs.body?.processed || "",
      image: imageUrl,
      // keep raw attrs if you want to debug
      _raw: attrs,
    };
  });

  return projects;
}

export async function fetchGallery() {
  const response = await fetch(
    `${BASE}/jsonapi/node/gallery_item?include=field_image`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch gallery items");
  }

  const data = await response.json();
  const included = data.included || [];

  const galleryItems = data.data.map((item) => {
    // support single or multi-value image relationship
    let imgId = null;
    const imgRel = item.relationships?.field_image?.data;
    if (Array.isArray(imgRel)) {
      imgId = imgRel[0]?.id;
    } else {
      imgId = imgRel?.id;
    }
    const imgData = included.find((inc) => inc.id === imgId);
    const imageUrl =
      imgData && imgData.attributes?.uri?.url
        ? imgData.attributes.uri.url.startsWith("http")
          ? imgData.attributes.uri.url
          : `${BASE}${imgData.attributes.uri.url}`
        : null;

    return {
      id: item.id,
      title: item.attributes.title,
      description: item.attributes.field_description || "",
      image: imageUrl,
    };
  });

  return galleryItems;
}

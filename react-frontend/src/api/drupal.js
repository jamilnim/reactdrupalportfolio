const BASE = import.meta.env.VITE_DRUPAL_BASE || "https://drupal-portfolio.lndo.site";

export async function fetchProjects() {
  // Include image relationship from Drupal
  const response = await fetch(`${BASE}/jsonapi/node/project?include=field_image`);
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await response.json();
  const included = data.included || [];

  // Map each project and attach its image URL (if available) 
  const projects = data.data.map((p) => {
    const imgId = p.relationships.field_image?.data?.id;
    const imgData = included.find((item) => item.id === imgId);
    const imageUrl = imgData ? `${BASE}${imgData.attributes.uri.url}` : null;

    return {
      id: p.id,
      title: p.attributes.title,
      body: p.attributes.body?.processed || "",
      image: imageUrl,
    };
  });

  return projects;
}

export async function fetchGallery() {
    // Include the related image field from Drupal JSON:API
    const response = await fetch(`${BASE}/jsonapi/node/gallery_item?include=field_image`);
    if (!response.ok) {
      throw new Error("Failed to fetch gallery items");
    }
  
    const data = await response.json();
    const included = data.included || [];
  
    // Map each gallery item with its image
    const galleryItems = data.data.map((item) => {
      const imgId = item.relationships.field_image?.data?.id;
      const imgData = included.find((inc) => inc.id === imgId);
      const imageUrl = imgData ? `${BASE}${imgData.attributes.uri.url}` : null;
  
      return {
        id: item.id,
        title: item.attributes.title,
        description: item.attributes.field_description || "",
        image: imageUrl,
      };
    });
  
    return galleryItems;
  }

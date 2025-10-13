import React, { useEffect, useState } from "react";
import { fetchGallery } from "../api/drupal";
import "./Gallery.css";
import AGalleryPic from "./AGalleryPic";

export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    async function loadGallery() {
      try {
        const data = await fetchGallery();

        // Check if data is an array
        if (!Array.isArray(data)) {
          console.error("Invalid API response:", data);
          return;
        }

        setGallery(data); // Already formatted
      } catch (err) {
        console.error("Error fetching gallery:", err);
      }
    }

    loadGallery();
  }, []);

  if (selectedImage) {
    return (
      <AGalleryPic
        image={selectedImage}
        onBack={() => setSelectedImage(null)}
      />
    );
  }

  if (gallery.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "40px" }}>Loading gallery...</p>;
  }

  return (
    <section className="gallery-wrapper">
      <div className="gallery-grid">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="gallery-card"
            onClick={() => setSelectedImage(item)}
          >
            {item.image && (
              <img src={item.image} alt={item.title} className="gallery-image" />
            )}
            <h3 className="gallery-title">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

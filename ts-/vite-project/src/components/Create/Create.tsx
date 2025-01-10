import styles from './Create.module.css'
import { useState } from "react";

interface CreateProps {
    onCreate: (product: Product) => void; // Type the onCreate prop as a function that takes a Product
  }

  interface Product {
    name: string;
    description: string;
    price: number;
  }

export function Create({onCreate}: CreateProps){
    const [isOpen, setIsOpen] = useState(false);

    
  // Function to open the popup
  const openPopup = () => {
    setIsOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsOpen(false);
  };

  const [product, setProduct] = useState<Product>({
    name: '',
    description: '',
    price: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProduct({
      name: '',
      description: '',
      price: 0
    });
    onCreate(product)
  };

  return (
    <div className={styles.mainBlock}>
      <button onClick={openPopup} className={styles.openButton}>
        Open Popup
      </button>

      {isOpen && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required value={product.name} onChange={handleChange}/>

                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" required value={product.description} onChange={handleChange}></textarea>

                <label htmlFor="price">Price</label>
                <input type="number" id="price" name="price" required value={product.price} onChange={handleChange}/>

                <button type="submit" className={styles.submitButton}>Submit</button>
            </form>

            <button onClick={closePopup} className={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
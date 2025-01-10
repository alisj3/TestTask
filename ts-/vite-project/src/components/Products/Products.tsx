import { useEffect, useState } from 'react'
import { createProduct, fetchWalks } from '../../services/notes'

import styles from './Products.module.css'
import { Create } from '../Create/Create'

export function Products(){
    
    const [products, setProducts] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () => {
        let notes = await fetchWalks()
        
        setProducts(notes)
        }

        fetchData()
    }, [])

    /*=================================*/
    const imageNames = ['productOne.png', 'productTwo.jpg', 'productThree.jpg', 'productFour.jpg', 'productFive.jpg'];
    
    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * imageNames.length);
        return `/${imageNames[randomIndex]}`;
      };

      interface Product {
        name: string;
        description: string;
        price: number;
      }
    
      const onCreate = async (product: Product) => {
        try {
          // Await the createProduct function to make sure it's completed before proceeding
          const status = await createProduct(product);
          console.log('Product created with status:', status);
        } catch (e) {
          console.error('Error creating product:', e);
        }
      };

    return (
        <div className={styles.products}>
            <div className="container">
                <div className={styles.products_inner}>
                    <h2 className={styles.products_h2}>Products</h2>
                    
                    <div className={styles.product_grid}>
                        {products.map((product, index) => (
                        <div className={styles.product} key={index}>
                            <img className={styles.product_img} src={getRandomImage()} alt="" />

                            <div className={styles.product_info}>
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <h2>$ {product.price}</h2>
                            </div>
                            
                        </div>
                        ))}
                    </div>

                    <Create onCreate={onCreate} />
                </div>
            </div>
        </div>
    )
}
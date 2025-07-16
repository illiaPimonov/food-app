'use client'

import React, { lazy, Suspense, useEffect, useState } from 'react'
import styles from './products.module.css'
import Loading from './Loading'

const ProductCard = lazy(() => import('../ProductCard/ProductCard'))

interface Product {
  id: number
  title: string
  description: string
  image: string
  price: number
  customizable:boolean
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/assets/products/products.json')
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.error('Ошибка загрузки продуктов:', err)
      }
    }

    fetchData()
  }, [])

  return (
    <div className={styles.wrapper}>
      {products.map(product => (
        <Suspense key={product.id} fallback={<Loading />}>
          <ProductCard product={product} />
        </Suspense>
      ))}
    </div>
  )
}

export default Products

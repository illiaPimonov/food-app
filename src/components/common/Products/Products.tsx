'use client'

import React, { useEffect, useState } from 'react'
import styles from './products.module.css'
import ProductCard from '../ProductCard/ProductCard'

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
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Products

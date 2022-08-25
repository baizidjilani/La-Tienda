import React from 'react'
import { Link } from 'react-router-dom'

export default function OrderConfirmation() {
  return (
    <div>
        <h1>Your order has been submitted.</h1>
        <div className="d-flex justify-content-ledt mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                          >
                            <Link to ='/'>Go Back</Link>
                          </button>
                        </div>
    </div>
  )
}

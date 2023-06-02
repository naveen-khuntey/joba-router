import React from 'react'
import {Link} from 'react-router-dom';
export default function ErrorPage() {
  return (
    <div>
      <h2>Page Not Found!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores incidunt nesciunt facere numquam laboriosam minus dolorum libero, repellendus aspernatur? Magni repudiandae at provident error consequatur quas molestias odit quo aliquid!</p>
      <p>Go to <Link to="/">Home</Link></p>
    </div>
  )
}

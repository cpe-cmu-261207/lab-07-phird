import {useEffect} from 'react';
import axios from 'axios'
import Link from "next/link"
const baseURL = 'https://dummyapi.io/data/api'
const Home = () => {
  const style = {
    backgroundColor: '#957DAD',
    border: 'none',
    color: 'white',
    padding: '10px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
  }
  return (
    <div>
      <div class="Menu">
      <table id ="Link">
          <tr >
            <td style= {style}><Link href="/">Home</Link></td>
            <td style= {style}><Link href="/gallery">Gallery</Link></td>
            <td style= {style}><Link href="/contact">Contact</Link></td>
            <td style= {style}><Link href="/gpa">GPA calculator</Link></td>
            <td style= {style}><Link href="/post">post</Link></td>
          </tr>
        </table>
      </div>
      <table>
        <tr class="name-tag" >
          <td>
            <h1> PHIRACHAT KOCHANIL </h1>
            <h2> iamphird@gmail.com </h2>
            <h2> Instagram : Phirtagram</h2>
          </td>
          <td>
            <img className="propic" src="scr/images/01.jpg" alt="that's cool pic in the world ." />
          </td>
        </tr>
      </table>

    </div>
  )
}

export default Home

import Link from 'next/link'

const Gallery = () => {
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
      <>
        <table id ="Link">
            <tr >
                <td style= {style}><Link href="/">Home</Link></td>
                <td style= {style}><Link href="/gallery">Gallery</Link></td>
                <td style= {style}><Link href="/contact">Contact</Link></td>
                <td style= {style}><Link href="/gpa">GPA calculator</Link></td>
                <td style= {style}><Link href="/post">post</Link></td>
            </tr>
        </table>
        <table>
            <tr class = "name-tag">
                <td><h1> Phiracaht Kochanil </h1>
                    <h2>Student</h2>
                    <h2>iamphird@gmail.com</h2></td>
                <td><img class = "profile" src="photo/so yummy.png" alt="what a cool pic ever ! ."/></td>
            </tr>
        </table>
        <h1 class = "title">Gallery</h1>
        <div>
            <table class = "main-table">
                <tr>
                    <td><img class = "gallery" src="image/01.jpg" alt="pic1"/>
                        <p class = "description">Eat rice , no bread</p>
                    </td>
                    <td><img class = "gallery" src="image/01.jpg" alt="pic2"/>
                        <p class = "description">S T O N K S</p>
                    </td>
                    <td><img class = "gallery" src="image/01.jpg" alt="pic3"/>
                        <p class = "description">mun kue pang!</p>
                    </td>
                    <td><img class = "gallery" src="image/01.jpg" alt="pic4"/>
                        <p class = "description">G E N I U S !</p>
                    </td>
                </tr>
                <tr>
                    <td><img class = "gallery" src="image/01.jpg" alt="pic5"/>
                    <p class = "description">ei b0ss</p>
                    </td>
                    <td><img class = "gallery" src="image/01.jpg" alt="pic6"/>
                    <p class = "description">requiem da</p>
                    </td>
                    <td><img class = "gallery" src="image/01.jpg" alt="pic7"/>
                    <p class = "description">This is taste of a liar , Giorno Giorvana!</p>
                    </td>
                    <td><img class = "gallery" src="image/01.jpg" alt="pic8"/>
                    <p class = "description">Oh! IC.</p>
                    </td>
                </tr>
            </table>
        </div>
      </>
  )
}

export default Gallery
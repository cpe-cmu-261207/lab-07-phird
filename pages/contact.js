import Link from "next/link" 
const Contact = () => {
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
    const containerStyle = {
        bordeRadius: '5px',
        backgroundColor: '#f2f2f2', 
        padding: '20px',
    }
    const inputBox = {
        width: '100%',
        padding: '12px',
        border: '1px solid #ccc', 
        borderRadius: '4px',
        boxSizing: 'border-box', 
        marginTop: '6px', 
        marginBottom: '16px', 
        resize: 'vertical',
    }
    const button = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '12px 20px', 
        border: 'none', 
        borderRadius: '4px',
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
           <tr>
            <div className="container" style={containerStyle}>
                <form>
                    <label for="fname"> First Name</label>
                    <input type='text' id="fname" name='fname' placeholder='YourName' style={inputBox}/>
                    <label for="lname"> Last Name</label>
                    <input type='text' id="lname" name='lname' placeholder='YourLastName' style={inputBox}/>
                    <label for="subject"> Subject</label>
                    <textarea id="subject" name='subject' placeholder='Write Something Here' style={inputBox}/>

                    <input type='submit' valu='submit' style={button} />
                </form>
            </div> 
           </tr>
        </table>

     </>
    )
}
export default Contact
function Hom() {
    return (
        <div>
            <div class="head1" style={{
                backgroundColor: 'darkslategray',
                height: '100%',
                backgroundImage: 'url(https://images.pexels.com/photos/261043/pexels-photo-261043.jpeg?auto=compress&cs=tinysrgb&w=600)',
                minHeight: '700px',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div class="navbar" style={{
                    display: 'flex',
                    color: 'darkgoldenrod',
                    textShadow: '0 0 3px #ff0000',
                    justifyContent: 'left',
                    fontSize: 'larger'
                }}>
                    <h1> WELCOME TO THE WORLD OF GAMBLING </h1>
                </div>
            </div>

            <div class="savio" style={{
                color: 'black',
                paddingTop: '50px',
                paddingRight: '100px',
                paddingBottom: '10px',
                 paddingLeft: '100px',
                textAlign: 'center',
                fontSize: 'medium',
                fontFamily: 'Arial, Helvetica, sans-serif',
                padding: '90px', // This might be excessive padding
                fontSize: 'large',
                backgroundImage: 'url(https://images.pexels.com/photos/1007523/pexels-photo-1007523.jpeg?auto=compress&cs=tinysrgb&w=600)',
                minHeight: '700px',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <h2> Here We Provide Various Ideas For Becoming The Greatest Gambler Of All Time </h2>
                <div class="navbar1" style={{
                    textAlign: 'center',
                    color: 'tomato'
                }}>
                    <button>login</button>
                </div>

                <div class="navbar2" style={{
                    textAlign: 'center',
                    fontStyle: 'italic',
                    color: 'gold',
                    backgroundColor:'skyblue',
                    fontSize:'30px',
                    
                }}>
                    The Following Shows The Famous Gamblers From SMC
                </div>

                <div class="table12">
                    <table class="table1 ,th,td" style={{width: '50%',
        border: '5px solid black',
        borderCollapse: 'collapse',
        borderColor: 'black',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'azure'}}>
                        <tr>
                            <th>ID NO</th>
                            <th>NAME</th>
                            <th>AMOUNT EARNED</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Savio</td>
                            <td>10000000000</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>ANOOP HEROLD</td>
                            <td>100000000</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>ASWIN</td>
                            <td>1000000</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>SHAHEEN</td>
                            <td>5000000</td>
                        </tr>
                    </table>
                </div>

                <div class="anchor">
                    <a href="http://localhost:3000/register">click here for register! </a>
                </div>

                <div class= "anchor2"><h1>CLICK LOGIN IF YOU ALREADY HAVE AN ACCOUNT</h1>
                    <a href="http://localhost:3000/login">CLICK HERE FOR LOGIN</a>
                </div>
            </div>
        </div>
    );
}

export default Hom;
import Navbar from "../components/nav";
import { Container,Grid,GridItem,Text,Image, Box,Button } from "@chakra-ui/react";

const HomePage=()=>{
    return(
        <>
        <div style={{height:"100vh"}}>
                    <Grid templateColumns='repeat(3,10fr)' gap={2}
                   
                    style={{margin:'150px 0px 0px 370px'}}
                    >
                        <GridItem 
                        colStart={1}
                        colEnd={2}
                        >
                            <Container style={{margin:'50px 0px 0px 0px'
                        
                        }}>
                                <Text fontSize='5xl' as={'b'} >
                                Grow,manage and pay your temp work force ! 
                                </Text>
                                <Text fontSize='xl' >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam

                                </Text>
                                <div style={{margin:"40px 0px 0px 0px",padding:"0px 0px 0px 0px "}}>
                                    <Button colorScheme='purple' style={{margin:'0px 10px 0px 0px'}}>Get In touch</Button>
                                    <Button 
                                    colorScheme={"whiteAlpha"} 
                                    variant='outline' 
                                    borderColor={'blackAlpha.500'}
                                    textColor='blackAlpha.900'
                                    > 
                                    Call:267-293-3947
                                    </Button>
                                </div>
                            </Container>
                        </GridItem>
                        <GridItem
                            colSpan={2}
                        >
                            <Image 
                            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                            className="image"
                            >
                            </Image>
                        </GridItem>

                    </Grid>
                    
            
        </div>
        <div style={{height:'100vh',backgroundColor:'#050811'}} >
            <div  className='content'style={{padding:'20pc 100px 0px 100px'}}>
                        <div className="content1">

                        <Grid templateColumns='repeat(2,10fr)' gap={20}>
                            <GridItem>
                                <Text fontSize={'5xl'} color='#FFFFFF'>
                                 Everyone in construction knows the risks and challenges of temp blue-collar labour
                                </Text>
                                
                            </GridItem>
                            <GridItem>
                                <Text color='#FFFFFF' fontSize={'4xl'} as='b' >Finding and retaining people</Text>
                                <Text color='#FFFFFF' noOfLines={4}>Posting jobs and screening candidates costs valuable time. Dealing with no-shows, walk-offs and people dropping your job for 50p an hour more elsewhere risks derailing your schedule</Text>
                                <Text color='#FFFFFF' fontSize={'4xl'} as='b' noOfLines={4}>Cash flow and costs</Text>
                                <Text color='#FFFFFF'>Growing a construction company isn't easy. Keeping cash flow stable is tough when you pay people weekly but clients pay you on 30+ days. Relying on traditional recruitment agencies for labour eats into your profit</Text>
                                <Text color='#FFFFFF'fontSize={'4xl'} as='b' >Too much paperwork</Text>
                                <Text color='#FFFFFF' noOfLines={4}>Collecting and approving timesheets, compliance documents and tracking which site people are working on is time consuming and error prone when you're juggling multiple projects</Text>
                            </GridItem>
                            
                        </Grid>
                
                        </div>

            </div>
        </div>

        <div style={{height:'100vh'}}>
                        
            
        </div>

        </>
    )
}
export  {HomePage};
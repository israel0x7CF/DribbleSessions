import {
  Container,
  Grid,
  GridItem,
  Text,
  Image,
  Button,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <Grid
          templateColumns="repeat(3,10fr)"
          gap={2}
          style={{ margin: "150px 0px 0px 370px" }}
        >
          <GridItem colStart={1} colEnd={2}>
            <Container style={{ margin: "50px 0px 0px 0px" }}>
              <Text fontSize="5xl" as={"b"}>
                Grow,manage and pay your temp work force !
              </Text>
              <Text fontSize="xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Text>
              <div
                style={{
                  margin: "40px 0px 0px 0px",
                  padding: "0px 0px 0px 0px ",
                }}
              >
                <Button
                  colorScheme="purple"
                  style={{ margin: "0px 10px 0px 0px" }}
                >
                  Get In touch
                </Button>
                <Button
                  colorScheme={"whiteAlpha"}
                  variant="outline"
                  borderColor={"blackAlpha.500"}
                  textColor="blackAlpha.900"
                >
                  Call:267-293-3947
                </Button>
              </div>
            </Container>
          </GridItem>
          <GridItem colSpan={2}>
            <Image
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="image"
            ></Image>
          </GridItem>
        </Grid>
      </div>
      <div style={{ height: "100vh", backgroundColor: "#050811" }}>
        <div className="content" style={{ padding: "20pc 100px 0px 100px" }}>
          <div className="content1">
            <Grid templateColumns="repeat(2,10fr)" gap={20}>
              <GridItem>
                <Text fontSize={"5xl"} color="#FFFFFF">
                  Everyone in construction knows the risks and challenges of
                  temp blue-collar labour
                </Text>
              </GridItem>
              <GridItem>
                <Text color="#FFFFFF" fontSize={"4xl"} as="b">
                  Finding and retaining people
                </Text>
                <Text color="#FFFFFF" noOfLines={4}>
                  Posting jobs and screening candidates costs valuable time.
                  Dealing with no-shows, walk-offs and people dropping your job
                  for 50p an hour more elsewhere risks derailing your schedule
                </Text>
                <Text color="#FFFFFF" fontSize={"4xl"} as="b" noOfLines={4}>
                  Cash flow and costs
                </Text>
                <Text color="#FFFFFF">
                  Growing a construction company isn't easy. Keeping cash flow
                  stable is tough when you pay people weekly but clients pay you
                  on 30+ days. Relying on traditional recruitment agencies for
                  labour eats into your profit
                </Text>
                <Text color="#FFFFFF" fontSize={"4xl"} as="b">
                  Too much paperwork
                </Text>
                <Text color="#FFFFFF" noOfLines={4}>
                  Collecting and approving timesheets, compliance documents and
                  tracking which site people are working on is time consuming
                  and error prone when you're juggling multiple projects
                </Text>
              </GridItem>
            </Grid>
          </div>
        </div>
      </div>

      <div style={{ height: "100vh" }}>
        <div style={{ padding: "100px 0px 100px 250px" }}>
          <SimpleGrid columns={2} spacing={2}>
            <Box>
              <div className="container">
                <Text fontSize={'2xl'}>
                  <span className="banner">How We Help</span>
                </Text>
                <Text as='em' fontSize='sm'>HIRE FROM OUR NETWORK</Text>
                <Text as={'b'} fontSize='6xl' noOfLines={3}>
                    Hire vetted, local operatives from 
                    <span className="heighlight">
                        £2/ hour margin
                    </span>
                </Text>
              </div>
            </Box>
            <Box>
               
              <Image
                src="https://uploads-ssl.webflow.com/63a048567670a17a12507981/63cfaeaf51c342afa1fa2a1e_63a094c3b2d3ddf01acb9bf1_home-help-image-2%202.jpg"
                w="596px"
                h="635px"
              ></Image>
            </Box>

            <Box>

              <Image
                src="https://uploads-ssl.webflow.com/63a048567670a17a12507981/63ce510757b94ee659f78e40_63a094c3b2d3ddf01acb9bf1_home-help-image-2%201.jpg"
                w="596px"
                h="635px"
              ></Image>
            </Box>
            <Box>
            <div className="container">

            <Text fontSize={'2xl'}>
                  <span className="banner">How We Help</span>
            </Text>
              <Text>LEVERAGE YOUR NETWORK</Text>
              <Text fontSize={'6xl'} as='b' lineHeight={'1.0'}>
                Hire operatives you already know and trust for &nbsp; 
                <span className="heighlight">
                    £1.50/ hour
                    margin
                </span>
              </Text>
              <Text as={'p'} fontSize='xl' fontWeight={'400'}>
                Built for companies that already have a solid network, but don't
                have time to manage the hiring process internally. 
              </Text>
              <br />
            <Text fontSize={'xl'} as='p' fontWeight='400' noOfLines={3}>
                We'll build you a private network where you can quickly hire operatives and
                get 14-30 day payment terms to help with cash flow
            </Text>
            </div>
            </Box>
            <Box>
            <div className="container">

            <Text fontSize={'2xl'}>
                  <span className="banner">How We Help</span>
            </Text>
              <Text>EASY TO USE SOFTWARE</Text>
              <Text fontSize={'6xl'} as='b' lineHeight={'1.0'}><span className="heighlight">Eliminate errors</span>, delays and disputes</Text>
              <Text fontSize={'xl'} as='p' fontWeight='400' noOfLines={3}>
                Our custom-built software replaces manual paperwork, saving your
                busy teams hours per week on admin. Ensure people get paid
                accurately and on-time with digital timesheets, and view or
                download any document 24/7
              </Text>
            </div>
            </Box>

            <Box>
              <Image
                src="https://uploads-ssl.webflow.com/63a048567670a17a12507981/63a094c2a84384bd34c8b5ca_home-help-image-3.webp"
                w="596px"
                h="635px"
              ></Image>
            </Box>
          </SimpleGrid>
        </div>
      </div>
    </>
  );
};
export { HomePage };

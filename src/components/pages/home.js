import React from "react";
import {

  CssBaseline,
  Typography,
  makeStyles,
  Button,
  Container,
  Box,
  Grid,
  Modal,
  Card,
  CardContent,
  CardActions

} from "@material-ui/core";

 import DisplayEye from "./customModel"

function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}





const useStyles = makeStyles((theme)=>({
    paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
build :{
    marginTop: "100px"
},
text:{
    marginTop : "10px"

},
fa_grid:{
    height:"100px",
    width: "100px"

},
text_btn:{
    marginTop : "40px",
    padding  : "10px"


},
 insideBtn: {  
    background : "#ffffff" ,
    color : "#D23F57" ,
     
    
  },
  imgGallary : {
    width:"95%"
  },
    img_grid : {
        textAlign: 'center',
     
  },
  img:{
    width:"90%",
    borderRadius : "5%"
  },
  modelElement : {
    width : "1000px",
    height : "1000px"
  },
  modelsContainer :{
    marginTop : "50px"
  },
  containerholder:{
    marginTop:"50px",
    marginBottom: "25px",

   
  },
  classes_you:{
    align : "center"

  },
  cardclass:{
    width:"250px",
    height:"250px"
  },
  api:{
    height: "200px",
    width: "400px"
  }
}));


const Home = ()=>{
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const body = (
    <div style={modalStyle} className={classes.paper}>

      <DisplayEye />
    </div>
  );

    return(
       
      
                    <Container  fixed>
                        <CssBaseline />
                        <Container  className={classes.containerholder}>
                        <Grid  container justifyContent="center"  >

                            <Grid item xs={6} align="center"   >
                            <Typography variant="h3" component="h6" className={classes.build}  >
                                Build your online store with 
                            </Typography>
                            <Typography variant="h3" component="h6" align="center" className={classes.text}  >
                                Bazaar 
                            </Typography>
                            <Typography variant="h6" component="h6" className={classes.text}  >
                               SEO friendly Next.js Ecommerce Template. Helps you to build 
                            </Typography>
                            <Typography variant="h6" component="h6"align="center"  >
                                performant online store faster.
                            </Typography>
                             <Typography variant="h6" component="h6"  align="center" className={classes.text} >
                               SSR  Rest API   Multi vendor Support          
                            </Typography>
                            </Grid>

                        </Grid>
                        <Grid  container  justifyContent="center"   >

                            <Box item align="center" className={classes.text_btn}>

                            <Button variant="contained"  md={{marginRight : "15px"}} className={classes.insideBtn} >
                                         What's Inside
                            </Button>
                            </Box>

                            <Box  item align="center" className={classes.text_btn}>
                            <Button variant="contained" color="secondary"    >
                                         View Demos
                            </Button>

                            </Box>

                        </Grid>
                    </Container> 
                    
                       

                <Container>
                    <Grid container  spacing={2}  >
                    <Grid item >
                        <img  className={classes.imgGallary} src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Flanding%2Fpage-group-2.png&w=1920&q=75" alt=""/>
                    </Grid>
                    
                </Grid>

                </Container>
                <Container className={classes.containerholder}>
                         <Grid  container justifyContent="center"  >

                            <Grid item xs={6} align="center"   >
                            <Typography variant="h3" component="h6" className={classes.build}  >
                               WHAT YOU GET?
                            </Typography>
                             
                            </Grid>

                        </Grid>
                    </Container>
                <Container  className={classes.containerholder}>
                    <Grid container spacing={2} align="center"  >
                    <Grid item xs={12} md={3} xl={3} >
                     <img className={classes.img} src="https://bazaar.ui-lib.com/assets/images/landing/niche-demos.png" alt=""/>
                      
                    </Grid>
                    <Grid item xs={12} md={3} xl={3} >
                    <Typography variant="h6"     >
                            Niche Demos
                        </Typography>
                        <p> 9 Niche shop demos for online store. Super store, Fashion, Electronic, Grocery and etc</p>
                    <Button variant="contained" className={classes.insideBtn}   >
                            Browse Demos
                    </Button>
                    </Grid>
                    <Grid item xs={12} md={3} xl={3} >
                    
                            <img className={classes.img}  src="https://bazaar.ui-lib.com/assets/images/landing/inner-pages.png" alt=""/>
  
                    </Grid>
                     <Grid item xs={12} md={3} xl={3} >
                    <Typography variant="h6"     >
                            Shop Pages
                        </Typography>
                        <p> Clean Shop inner pages. Vendor shop, Sale/discount pages, checkout, cart and etc.</p>
                    <Button variant="contained" className={classes.insideBtn}   >
                            Browse Pages
                    </Button>
                    </Grid>
                      
                </Grid>

                </Container >

                <Container   className={classes.containerholder}>
                    <Grid container spacing={10} align="center"  >
                    <Grid item xs={12} md={3} xl={3} >
                     <img className={classes.img} src="https://bazaar.ui-lib.com/assets/images/landing/user-dashboard.png" alt=""/>
                      
                    </Grid>
                    <Grid item xs={12} md={3} xl={3} >
                    <Typography variant="h6"     >
                            User Dashboard
                        </Typography>
                        <p> Structured user dashboard for managing user account, orders, address and etc.</p>
                    <Button variant="contained" className={classes.insideBtn}   >
                            Browse User Dashboard
                    </Button>
                    </Grid>
                    <Grid item xs={12} md={3} xl={3} >
                    
                            <img className={classes.img}  src="https://bazaar.ui-lib.com/assets/images/landing/admin-dashboard.png" alt=""/>
  
                    </Grid>
                     <Grid item xs={12} md={3} xl={3} >
                    <Typography variant="h6"     >
                           Admin Dashboard
                        </Typography>
                        <p> 30+ Super admin and vendor dashboard interfaces</p>
                    <Button variant="contained" className={classes.insideBtn}   >
                            Browse Dashboard
                    </Button>
                    </Grid>
                      
                </Grid>

                </Container >
                <Container className={classes.containerholder}>
                         <Grid  container justifyContent="center"  >

                            <Grid item xs={6} align="center"   >
                            <Typography variant="h5" component="h6" className={classes.build}  >
                               POWERFUL FEATURES

                            </Typography>
                             
                            </Grid>

                        </Grid>
                    </Container>
                <Container  className={classes.containerholder}>
                    <Grid container spacing={3} >
                        
                        <Grid item xs={12} md={3} >
                            <Card  >
                                <CardContent >
                                    <img justifyContent="center" className={classes.fa_grid} src="https://cdn-icons-png.flaticon.com/512/2799/2799166.png" alt=""/>

                                    <CardActions>
                                                <Typography align="center" color="textSecondary">
                                                SEO Friendly

                                                </Typography>
                                    </CardActions>
                                </CardContent>
                            </Card>
                            
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card>
                                <CardContent>
                                   <img className={classes.fa_grid} scr="https://thumbs.dreamstime.com/z/cloud-hosting-icono-de-recurso-compartido-servidor-gr%C3%A1ficos-vectoriales-dise%C3%B1o-vectorial-bien-organizado-y-editable-usando-199769497.jpg" alt=""/>

                                    <CardActions>
                                                <Typography  color="textSecondary">
                                                REST API

                                                </Typography>
                                    </CardActions>
                                </CardContent>
                            </Card>
                            
                        </Grid>
                        <Grid item xs={12} md={3}>
                        <Card>
                                <CardContent>
                                    <img className={classes.fa_grid} scr=" https://cdn-icons-png.flaticon.com/512/6461/6461844.png" alt=""/>


                                    <CardActions>
                                                <Typography  color="textSecondary">
                                                Multi-Vendor Support

                                                </Typography>
                                    </CardActions>
                                </CardContent>
                            </Card>
                            
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card>
                                <CardContent>
                                  <img className={classes.fa_grid} scr="https://cdn-icons-png.flaticon.com/512/1248/1248428.png?w=740&t=st=1680698943~exp=1680699543~hmac=cd13ebe6d467d483e2448836fffe73664d360a2de472d8de47432da7d1be08d7" alt=""/>
                                    <CardActions>
                                                <Typography  color="textSecondary">
                                                Optimized for Mobile

                                                </Typography>
                                    </CardActions>
                                </CardContent>
                            </Card>
                             
                        </Grid>
                        <Grid item xs={12} md={3}
                        ><Grid item>
                            <Card>
                                <CardContent>
                                    <img className={classes.fa_grid} scr=" https://cdn-icons-png.flaticon.com/512/6461/6461844.png" alt=""/>

                                    <CardActions>
                                                <Typography  color="textSecondary">
                                                Clean Code


                                                </Typography>
                                    </CardActions>
                                </CardContent>
                            </Card>
                            
                        </Grid>
                            
                        </Grid>
                        <Grid item xs={12} md={3}>
                    <Card>
                                <CardContent>
                                    <img  className={classes.fa_grid} src="https://cdn-icons-png.flaticon.com/512/2799/2799166.png" alt="" />

                                    <CardActions>
                                                <Typography  color="textSecondary">
                                                Fast
                                                </Typography>
                                    </CardActions>
                                </CardContent>
                            </Card>
                            
                        </Grid>
                        <Grid item xs={12} md={3}>
                            
                            <Card>
                                <CardContent>
                                    <img className={classes.fa_grid} src="https://cdn-icons-png.flaticon.com/512/2799/2799166.png" alt="" />

                                    <CardActions>
                                                <Typography  color="textSecondary">
                                                Admin Dashboard

                                                </Typography>
                                    </CardActions>
                                </CardContent>
                            </Card>
                     
                            
                        </Grid>
                        <Grid item xs={12} md={3}>
                      
                            <Card>
                                <CardContent>
                                   <img className={classes.fa_grid} src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*j3GPPrDmy2CqnxPw-NtWHg.png" alt=""/>

                                    <CardActions>
                                                <Typography  color="textSecondary">
                                                Figma Ready

                                                </Typography>
                                    </CardActions>
                                </CardContent>
                            </Card>
  
                        </Grid>
                        
                        
                    </Grid>
                </Container>
                <Container className={classes.containerholder}>
                    <Grid container align="center" spacing={10} >
                        <Grid item xs={12} md={6}>

                            <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Flanding%2Fproduct-model.png&w=640&q=75" alt=""/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <h4> Data structure with   </h4>
                          <h4>   Typescript Data models </h4> 
                          <ul> 
                            <li>
                                Product model

                            </li>
                            <li>User model</li>
                            <li>Shop model</li>
                            <li>Order model</li>
                            <li> Address model</li>
                            <li>20+ more models</li>
                        </ul>          
                        </Grid>
                        <Grid item xs={12} md={4}  >

                            <h4> REST API endpoints </h4>
                             
                             <p>Customize and use existing data structure</p>   
                             <p>to implement your server easily. </p>   
                            
                        </Grid>
                        <Grid item xs={12} md={8} >
                            <img className={classes.api} src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Flanding%2Fproduct-model.png&w=640&q=75" alt="" />
                        </Grid>
                    </Grid>
                </Container>
                <Container>
                    <Grid></Grid>
                </Container>

     

                <Container  className={classes.containerholder}>
                    <Grid container spacing={8} className={classes.modelsContainer} >
                        <Grid item xs={12} md={4}   >
                    
                        <img className={classes.img} onMouseOver={handleOpen} src="https://bazaar.ui-lib.com/assets/images/landing/admin-dashboard.png" alt=""/>
                            <p> Order Details</p>
                             <Modal
                    open={open}
                    onClose={handleClose}
                    className="eye-model"
                    >
                      {body}
                 </Modal>                  
                    </Grid>
                    <Grid item xs={12} md={4}   >
                <img className={classes.img} onMouseOver={handleOpen}  src="https://bazaar.ui-lib.com/assets/images/landing/admin-dashboard.png" alt=""/>
                    <p> Order Details</p>
                    <Modal
                    open={open}
                    onClose={handleClose}
                    className="eye-model"
                    >
                      {body}
                 </Modal>
                    </Grid>
                    <Grid item xs={12} md={4}   >
                    
                            <img className={classes.img} onMouseOver={handleOpen} src="https://bazaar.ui-lib.com/assets/images/landing/admin-dashboard.png" alt=""/>
                            <Box  spacing={8}> Order Details</Box>
                    <Modal
                    open={open}
                    onClose={handleClose}
                    className="eye-model"
                    >
                      {body}
                 </Modal>
                    </Grid>
                        
                
                </Grid>
                </Container>

                <Container className={classes.containerholder}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} align="center">
                            <Button variant="contained"  color="secondary">
                                Purchase  Now
                            </Button>
                        </Grid>
                        
                    </Grid>
                </Container>
                <Container className={classes.containerholder}>
                         <Grid  container justifyContent="center"  >

                            <Grid item xs={12} align="center"   >
                            <Typography variant="h4" component="h6" className={classes.build}  >
                               TECHNOLOGIES USED
                            </Typography>
                             
                            </Grid>

                        </Grid>
                    </Container>
                     <Container  className={classes.containerholder}>
                    <Grid container spacing={3} >
                        
                        <Grid item xs={12} md={3}>
                        <Card>
                                <CardContent>
                                    <i class=" fa fa-fa"></i>


                                    <CardActions>
                                                <Typography  color="textSecondary">
                                                React

                                                </Typography>
                                    </CardActions>
                                </CardContent>
                            </Card>
                            
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card>
                                <CardContent>
                                  <img className={classes.fa_grid} scr="https://cdn-icons-png.flaticon.com/512/1248/1248428.png?w=740&t=st=1680698943~exp=1680699543~hmac=cd13ebe6d467d483e2448836fffe73664d360a2de472d8de47432da7d1be08d7" alt=""/>
                                    <CardActions>
                                                <Typography  color="textSecondary">
                                                Next.js


                                                </Typography>
                                    </CardActions>
                                </CardContent>
                            </Card>
                             
                        </Grid>
                        <Grid item xs={12} md={3}
                        ><Grid item>
                            <Card>
                                <CardContent>
                                    <img className={classes.fa_grid} scr=" https://cdn-icons-png.flaticon.com/512/6461/6461844.png" alt=""/>

                                    <CardActions>
                                                <Typography  color="textSecondary">
                                                TypeScript


                                                </Typography>
                                    </CardActions>
                                </CardContent>
                            </Card>
                            
                        </Grid>
                            
                        </Grid>
                        <Grid item xs={12} md={3}>
                    <Card>
                                <CardContent>
                                    <img  className={classes.fa_grid} src="https://cdn-icons-png.flaticon.com/512/2799/2799166.png" alt="" />

                                    <CardActions>
                                                <Typography  color="textSecondary">
                                                  MUI
                                                </Typography>
                                    </CardActions>
                                </CardContent>
                            </Card>
                            
                        </Grid>

                        
                        
                    </Grid>
                </Container>

                
                
       
       
    </Container>
        
    )
}





export default Home
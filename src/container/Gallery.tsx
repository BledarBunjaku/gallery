import {Grid,
makeStyles,
createStyles,
TextareaAutosize,
Box,
Typography
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import CardImage from "../components/cardImage";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
 

const useStyles = makeStyles((Theme)=>

createStyles({

    galleryPathBar: {
        display: "flex",
        [Theme.breakpoints.down('xs')]: {
            flexDirection: "column"
          }
    },
    
    galleryPathWrapper:{
        color: "#5d5c5c",
        flex: 1,
        boxShadow: "0 1px 2px grey",
        height: "max-content",
            "& h2": {
            width: "100%",
            padding: "5px 10px" ,
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#5d5c5c",
                height: "max-content"
            
        }
    },
        galleryPathBack:{
            color: "#fff",
            boxShadow: "0 1px 2px grey",
            flexBasis: 220,
                "& h2": {
                padding: "5px 10px" ,
                fontSize: "1.5rem",
                fontWeight: "bold",
                backgroundColor: "#5d5c5c",
                width: "100%",
                "& span":{
                   verticalAlign: "middle"
                }
        },
        [Theme.breakpoints.down('xs')]: {
            flex: 1
          }
    },
        galleryContainer: {
            paddingLeft: 220,
            [Theme.breakpoints.down('sm')]: {
                padding: 0
              }
        },
        galleryTierName: {
            paddingTop: 25,
            border: 1,
            paddingBottom: 20
        },
        galleryName: {
            border: "none",
            boxShadow: "0 1px 3px grey",
            "& input":{
                width: "100%",
                boxSizing: "border-box",
                fontSize: "16px",
                border: "none",        
                    "&:focus-visible" : {
                    outline: "none",
                    border:"none"
                    }
            },
            "& button": {
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer"
            }
        },

        galleryDescription: {
            maxWidth: 850,
            overflow: "hidden",
            boxShadow: "0 0 3px grey",
            marginBottom: 20,
            position: "relative",            
            "&  *": {
                boxSizing: "border-box"
            },
            "& textarea": {
                resize: "none",
                width: "100%",
                border: "none",
                borderColor: "grey",
                "&:focus": {
                    outline: "none"
                }
            },
            "& svg": {
                padding: "5px 0",
                cursor: "pointer"
            }
            
        },
        editIcon:{
            position: "absolute",
            top: 5,
            right: 5,
            "& svg":{
                fontSize: 20,
                padding: 0
            }
        }
    
    
}))


const Gallery = () => {


    const classes = useStyles()
    return <>
        
            <Box className={classes.galleryPathBar} component="div">
                <Box className={classes.galleryPathBack} display="flex" alignItems="center" flexBasis="300px">
                    <Typography  component="h2"> <span><KeyboardBackspaceIcon/></span> {"Back to Tier I"}</Typography>
                </Box>                  
            
                <Box className={classes.galleryPathWrapper} component="div" display="flex" alignItems="center">
                    <Typography  component="h2">{"TIERS > Tier I > Gallery"}</Typography>
                </Box>
            </Box>
            
          
           <Box className={classes.galleryContainer} component="div">

                {/* Gallery Name */}

                <Box className={classes.galleryTierName} component="div">                   
                   <Box component="span" display="inline-block" py="5px">Gallery *</Box>
                        <Box className={classes.galleryName} component="div" border={2} maxWidth={450} boxSizing="border-box" display="flex" padding={0.5} borderRadius={5}>        
                            <input type="text" placeholder="Enter Tier Name"/>
                            <button><EditIcon/></button>
                        </Box>
                </Box>
                
                {/* Gallery Description */}

                <Box component="span" display="inline-block" py="5px" >Gallery description * </Box>
                    <Box className={classes.galleryDescription} component="div" display="flex" flexDirection="column" borderRadius={7}>
                        <Box className={classes.editIcon} component="div"><EditIcon/></Box>
                        <Box>
                            <TextareaAutosize rows="4" placeholder="Empty" />
                        </Box>        
                        <Box component="div" p="2px" borderTop={1} display="flex" alignItems="center" > 
                        <FormatBoldIcon /> <FormatItalicIcon /><FormatUnderlinedIcon /> <FormatListBulletedIcon />
                    </Box>
                </Box>

                </Box>

                 {/* Gallery Images */}
                 {/* <Box component="span" display="inline-block" py="5px" >Images</Box>
                <Grid container >
                    <Grid sm={3} md= {2} justify="center" alignItems="center">
                            <CardImage/>
                    </Grid>
                    <Grid sm={2} md= {1}>
                        <CardImage/>
                    </Grid>
                    <Grid sm={2} md= {1}>
                        <CardImage/>
                    </Grid>
                </Grid> */}
                
       
    </>
}

export default Gallery
import {
  makeStyles,
  createStyles,
  TextareaAutosize,
  Box,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CardImage from "../components/cardImage";
import PublishIcon from "@material-ui/icons/Publish";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import Example from "../example.jpg";
import CancelButton from '../stories/CancelButton'
import SaveChanges from '../stories/SaveChanges'


const useStyles = makeStyles((Theme) =>
  createStyles({
    // Gallery Path Bar
    galleryPathBar: {
      display: "flex",
      [Theme.breakpoints.down("xs")]: {
        flexDirection: "column",
      },
    },

    galleryPathWrapper: {
      color: "#5d5c5c",
      flex: 1,
      boxShadow: "0 1px 2px grey",
      display: "flex",
      alignItems: "center",
      "& h2": {
        width: "100%",
        padding: "5px 10px",
        fontSize: "1.1rem",
        fontWeight: "bold",
        color: "#5d5c5c",
        height: "max-content",
      },
    },

    galleryPathBack: {
      color: "#fff",
      boxShadow: "0 1px 2px grey",
      flexBasis: 170,
      display: "flex",
      alignItems: "center",
      "& h2": {
        padding: "5px 10px",
        fontSize: "1.1rem",
        fontWeight: "bold",
        backgroundColor: "#5d5c5c",
        width: "100%",
        height: "max-content",
        "& span": {
          verticalAlign: "middle",
          "& svg": {
            verticalAlign: "sub",
          },
        },
      },
      [Theme.breakpoints.down("xs")]: {
        flex: 1,
      },
    },
    //Gallery main container
    galleryContainer: {
      padding: "0 5px 0 170px",
      backgroundColor: "#eaeaea",
      [Theme.breakpoints.down("xs")]: {
        padding: "0 5px",
      },
      //Gallery Tier Name
    },
    galleryTierName: {
      paddingTop: 25,
      border: 1,
      paddingBottom: 20,
      "& div": {
        maxWidth: 450,
        padding: 8,
        border: "none",
        borderRadius: 5,
        boxShadow: "0 1px 3px grey",
        backgroundColor: "white",
        boxSizing: "border-box",
        display: "flex",
        "& input": {
          color: "#5a5a5a",
          width: "100%",
          boxSizing: "border-box",
          fontSize: "16px",
          border: "none",
          "&:focus-visible": {
            outline: "none",
            border: "none",
          },
        },
        "& button": {
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
        },
      },
    },

    //Gallery Description

    galleryDescription: {
      borderRadius: 7,
      flexDirection: "column",
      display: "flex",
      maxWidth: 850,
      overflow: "hidden",
      boxShadow: "0 1px 3px grey",
      marginBottom: 20,
      position: "relative",
      backgroundColor: "white",
      "&  *": {
        boxSizing: "border-box",
      },
      "& textarea": {
        color: "#5a5a5a",
        padding: 8,
        fontSize: 16,
        fontFamily: "Arial",
        resize: "none",
        width: "100%",
        border: "none",
        borderColor: "grey",

        "&:focus": {
          outline: "none",
        },
      },
      "& svg": {
        padding: "5px 0",
        cursor: "pointer",
      },
    },
    editDescription: {
      padding: 2,
      display: "flex",
      alignItems: "center",
      borderTop: "1px solid #c8c8c8",
    },

    //Images Gallery
    imagesContainer: {
      display: "flex",
      paddingBottom: 25,
      [Theme.breakpoints.down("xs")]: {
        flexDirection: "column",
      },
    },
    setCover: {
      display: "flex",
      flexWrap: "wrap",
    },

    //Cover Image
    card: {
      margin: 3,
      width: 200,
      height: "max-content",
      backgroundColor: "white",
      boxShadow: "0 1px 3px grey",
      overflow: "hidden",
      position: "relative",
      borderRadius: 5,
    },

    imageWrapper: {
      width: 200,
      height: 200,
      "& span": {
        "& svg": {
          color: "#eaeaea",
        },
      },
      "& img": {
        width: "100%",
        height: "100%",
      },
      "& div": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        width: "100%",
        top: 5,
      },
    },

    cardDescription: {
      height: "max-content",
      "& p": {
        fontSize: 10,
        padding: 5,
      },
    },

    // Upload Images box

    uploadImageWrapper: {
      maxWidth: 200,
      height: 120,
      border: "2px solid grey",
      borderRadius: 5,
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#d0d0d0",
    },
    uploadImageLogo: {
      height: "60%",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      "& svg": {
        fontSize: 55,
        color: "#12cbaf",
      },
    },
    uploadImageDescription: {
      height: "40%",
      "& p": {
        fontSize: 9,
        textAlign: "center",
        lineHeight: "12px",
        "& span": {
          color: "#12cbaf",
        },
      },
    },

    //COMMON CLASSES

    //GALLERY SECTIONS TITLE
    sectionsTitle: {
      fontSize: 16,
      color: "#5a5a5a",
      display: "inline-block",
      padding: "5px 0",
      "& span": {
        color: "#d70000",
      },
    },

    //EDIT ICON
    editIcon: {
      position: "absolute",
      top: 5,
      right: 5,
      "& svg": {
        fontSize: 20,
        padding: 0,
      },
    },
  })
);

const Gallery = () => {
  const classes = useStyles();
  return (
    <>
      {/*Path bar */}
      <Box className={classes.galleryPathBar} component="div">
        <Box className={classes.galleryPathBack}>
          <Typography component="h2">
            {" "}
            <span>
              <KeyboardBackspaceIcon />
            </span>{" "}
            {"Back to Tier I"}{" "}
          </Typography>
        </Box>

        <Box className={classes.galleryPathWrapper} component="div">
          <Typography component="h2">{"TIERS > Tier I > Gallery"}</Typography>
        </Box>
      </Box>

      <Box className={classes.galleryContainer} component="div">
        {/* Gallery Tier Name */}
        <Box className={classes.galleryTierName} component="div">
          <Box className={classes.sectionsTitle} component="span">
            Gallery Name <span>*</span>
          </Box>
          <Box component="div">
            <input type="text" placeholder="Enter Tier Name" />
            <button>
              <EditIcon fontSize="small" />
            </button>
          </Box>
        </Box>

        {/* Gallery Description */}
        <Box className={classes.sectionsTitle} component="span">
          Gallery description <span>*</span>{" "}
          <small>
            {" "}
            <i>(Max 225 characters)</i>{" "}
          </small>
        </Box>
        <Box className={classes.galleryDescription} component="div">
          <Box className={classes.editIcon} component="div">
            <EditIcon />
          </Box>
          <Box>
            <TextareaAutosize rows="4" placeholder="Description" />
          </Box>
          <Box className={classes.editDescription} component="div">
            <FormatBoldIcon /> <FormatItalicIcon />
            <FormatUnderlinedIcon /> <FormatListBulletedIcon />
          </Box>
        </Box>

        {/* Images Gallery */}

        {/* Cover Image Box */}
        <Box className={classes.sectionsTitle} component="span">
          Images
        </Box>
        <Box className={classes.imagesContainer} component="div">
          <Box>
            <Box className={classes.card} component="div">
              <Box className={classes.imageWrapper}>
                <img src={Example} />
                <Box>
                  <span>
                    <VisibilityIcon color="primary" fontSize="small" />
                  </span>
                  <DeleteIcon color="secondary" fontSize="small" />
                </Box>
              </Box>
              <Box
                className={classes.cardDescription}
                component="div"
                width="100%"
              >
                <Typography variant="h5" component="p" align="center">
                  Cover Imageasdasdasd
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* Set Cover Cards Images */}
          <Box className={classes.setCover} component="div">
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
          </Box>
        </Box>

        {/* Upload Image  */}
        <Box component="div" pb={5}>
          <Box className={classes.sectionsTitle} component="span">
            Upload Images <span>*</span>
          </Box>
          <Box className={classes.uploadImageWrapper} component="div">
            <Box className={classes.uploadImageLogo} component="div">
              <PublishIcon />
            </Box>
            <Box className={classes.uploadImageDescription} component="div">
              <Typography component="p">
                Drop your image here, or <span>browse</span>
                <br />
                <small>
                  <i>Supports JPG, JPG2000, PNG</i>
                </small>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box component="div" display="flex" justifyContent="space-around">
      <CancelButton>Cancel</CancelButton>
      <SaveChanges>Save Changes</SaveChanges>
      </Box>
    </>
  );
};
export default Gallery;

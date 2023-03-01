import { IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { FocusImage } from "../../FocusImage";
import { useState } from "react";



export default function ProjectImageList({ imageListData, onChange }) {

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }


  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    handleModal(true);
  };

  const handleModal = (value) => {
    onChange(value);
    setModal(value);
  };

  return <>
    <ImageList
      variant="quilted"
      cols={6}
      rowHeight={121}
    >
      <FocusImage modal={modal} tempImgSrc={tempImgSrc} setModal={() => handleModal(false)} />
      {imageListData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            style={{ cursor: "pointer" }}
            onClick={() => getImg(item.img)}
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy" />
          <ImageListItemBar
            title={item.title}
            actionIcon={<IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${item.title}`}
            >
              <InfoIcon />
            </IconButton>} />
        </ImageListItem>
      ))}
    </ImageList>
  </>;
}
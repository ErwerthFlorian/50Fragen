import styles from "./styles";
import {getClasses} from "../types";
import {useCallback, useEffect, useMemo, useState} from "react";
import {Input} from "../../Input/Input";
import {useTheme} from "../../../themes/useCurrentTheme";
import {css, cx} from "@emotion/css";
import {Paragraph} from "../TextDisplays/Paragraph/Paragraph";
import {useTranslation} from "../../../translation/useTranslation";

const avatarClasses = getClasses(styles);

export const Avatar = () => {
   const {image, uploadAvatar} = useImageWithLoader();
   const [isHovering, setIsHovering] = useState(false);
   const theme = useTheme();
   const avatarLabel = useTranslation("AvatarLabel");
   const avatarUploader = useTranslation("AvatarUploader");
   const avatarClass = useMemo(() => cx(avatarClasses.avatar, css({color: theme.textColor})), [theme]);
   const hoverClass = useMemo(() => cx(avatarClasses.paragraphPositioningWrapper, css({filter: isHovering ? "opacity(1)":"opacity(0)"})), [isHovering]);
   const [name, setName] = useState<string>("");

   const handleNameChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
      setName(e.currentTarget.value);
   }, []);

   return <div className={avatarClasses.wrapper}>
      <div className={avatarClasses.avatarWrapper}>
         <div onPointerEnter={() => setIsHovering(true)} onPointerLeave={() => setIsHovering(false)} onClick={uploadAvatar} className={avatarClass}>{image}</div>
      </div>
        <div className={hoverClass}><Paragraph>{avatarUploader}</Paragraph></div>
      <Input hasError={false} onValueChange={handleNameChange} label={avatarLabel}/></div>
}

const useImageWithLoader = () => {

   const defaultAvatar = useThemedAvatarSVG();
   const [image, setImage] = useState<string>(defaultAvatar);

   const [showLoader, setShowLoader] = useState(false);
   const showImage = useMemo(() => image && !showLoader, [showLoader, image])

   useEffect(() => {
      //upload image if set
      if (showLoader) {
         setTimeout(() => {
            setShowLoader(false);
         }, 50)
      }
   }, [showLoader, image])

   const imageClasses = useMemo(() => css({
      width: 200,
      position: "relative",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
   }), []);

   const localImage = !showImage ? <div style={{position: "relative", top: "50%"}}>Loading...</div> :
      <img alt={"round foo"} className={imageClasses} src={image}/>

   return {
      image: localImage,
      uploadAvatar: () => {
         const link = document.createElement("input");
         link.type = "file";
         link.accept = "image/*";
         link.click();
         link.addEventListener("change", () => {
            const file = link.files?.[0];
            if (file) {
               setImage(URL.createObjectURL(file));
            }
            link.remove();
         });

      }
   };
}


const useThemedAvatarSVG = () => {
   const theme = useTheme();
   const image = useMemo(() => `<svg  id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="-144 -144 800 800"> <g> <g> <path fill="${theme.textColor}" d="M333.187,237.405c32.761-23.893,54.095-62.561,54.095-106.123C387.282,58.893,328.389,0,256,0S124.718,58.893,124.718,131.282c0,43.562,21.333,82.23,54.095,106.123C97.373,268.57,39.385,347.531,39.385,439.795c0,39.814,32.391,72.205,72.205,72.205H400.41c39.814,0,72.205-32.391,72.205-72.205C472.615,347.531,414.627,268.57,333.187,237.405z M164.103,131.282c0-50.672,41.225-91.897,91.897-91.897s91.897,41.225,91.897,91.897S306.672,223.18,256,223.18S164.103,181.954,164.103,131.282z M400.41,472.615H111.59c-18.097,0-32.82-14.723-32.82-32.821c0-97.726,79.504-177.231,177.231-177.231s177.231,79.504,177.231,177.231C433.231,457.892,418.508,472.615,400.41,472.615z"/> </g> </g> </svg>`, [theme]);
   return `data:image/svg+xml;utf8,${image}`;
}
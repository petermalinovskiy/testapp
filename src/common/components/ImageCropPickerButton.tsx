import React, {FC, memo} from "react";
import {ImageStyle, ImageURISource, ViewStyle} from "react-native";
import {ImageResources} from "../ImageResources.g";
import {PhotoTakingButton} from "./PhotoTakingButton";
import {IImageCropPickerParams, useImageCropPicker} from "../hooks/useImageCropPicker";

interface IProps extends IImageCropPickerParams {
    image?: ImageURISource | null;
    icon?: ImageURISource;
    style?: ViewStyle;
    iconStyle?: ImageStyle;
    imageStyle?: ImageStyle;
    disabled?: boolean;
}

export const ImageCropPickerButton: FC<IProps> = memo(
    ({onPickerError, onImagePicked, onRemoveImage, image, icon, style, iconStyle, imageStyle, disabled}) => {
        const onPress = useImageCropPicker({
            onImagePicked,
            onRemoveImage,
            onPickerError,
        });

        return (
            <PhotoTakingButton
                style={style}
                iconStyle={iconStyle}
                imageStyle={imageStyle}
                onPress={onPress}
                backgroundImage={image}
                icon={icon}
                disabled={disabled}
            />
        );
    },
);

ImageCropPickerButton.defaultProps = {
    icon: ImageResources.camera,
};

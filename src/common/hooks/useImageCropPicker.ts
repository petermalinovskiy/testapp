import {useCallback} from "react";
import ImagePicker, {Image as CropperImage, Options} from "react-native-image-crop-picker";
import {showActionSheet} from "../helpers/dialogsHelpers";


export interface IImageCropPickerParams {
    onImagePicked: (image: CropperImage) => void;
    pickerOptions?: Options;
    onRemoveImage?: () => void;
    onPickerError?: (error: Error) => void;
}

export const useImageCropPicker = ({
                                       pickerOptions = defaultPickerOptions,
                                       onImagePicked,
                                       onPickerError,
                                       onRemoveImage,
                                   }: IImageCropPickerParams) => {

    const openGallery = useCallback(() => {
        ImagePicker.openPicker(pickerOptions)
            .then((imageResult) => {
                onImagePicked(imageResult);
            })
            .catch((error) => {
                onPickerError?.(error);
            });
    }, [onImagePicked, onPickerError, pickerOptions]);

    const openCamera = useCallback(() => {
        ImagePicker.openCamera(pickerOptions)
            .then((imageResult) => {
                onImagePicked(imageResult);
            })
            .catch((error) => {
                onPickerError?.(error);
            });
    }, [onImagePicked, onPickerError, pickerOptions]);

    return useCallback(() => {
        const options = [
            "Выбрать из Галереи",
            "Открыть камеру",
            onRemoveImage && "Удалить" || "",
            "Отмена",
        ].filter(el => el);

        showActionSheet(
            {
                title: "Выбрать фото",
                options: options,
                cancelButtonIndex: onRemoveImage ? 3 : 2,
                destructiveButtonIndex: onRemoveImage ? 2 : undefined,
            },
            (optionIndex) => {
                if (optionIndex == 0) {
                    openGallery();
                } else if (optionIndex == 1) {
                    openCamera();
                } else if (optionIndex == 2) {
                    onRemoveImage?.();
                }
            },
        );
    }, [ onRemoveImage, openGallery, openCamera]);
};

const defaultPickerOptions: Options = {
    height: 1000,
    width: 1000,
    cropping: true,
    compressImageQuality: 0.5,
    multiple: false,
    mediaType: "photo",
    includeBase64: true,
};

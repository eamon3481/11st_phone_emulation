type textType = '알람' | '메모' | '사진';
type routerType = '/alert' | '/memo' | '/photo';


export type AppButtonProps = {
  text: textType;
  route: routerType;
};


export type HeaderPropsType = {
  onClick? : (e: MouseEvent) => void
}

export type createElementType = {
    tagName: keyof HTMLElementTagNameMap;
    classNames?: string[];
    value?: string;
  };
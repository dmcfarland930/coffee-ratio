import { CardTitleText } from "./card-title.styles"

const CardTitle = (props) => {
  const {titleText} = props;
  return(
    <CardTitleText>
        {titleText}
    </CardTitleText>
  )
}

export default CardTitle
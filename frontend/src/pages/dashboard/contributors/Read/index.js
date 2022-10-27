import { useParams } from "react-router-dom";
import ReadContributor from "../../../../components/dashboard/contributors/Read";
import { Content } from "../../../../styles";

const PageReadContributor = () => {
  const { id } = useParams();

  return (
    <Content>
      <ReadContributor id={id} />
    </Content>
  );
};

export default PageReadContributor;

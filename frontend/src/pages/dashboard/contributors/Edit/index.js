import { useParams } from "react-router-dom";
import EditContributor from "../../../../components/dashboard/contributors/Edit";
import { Content } from "../../../../styles";

const PageEditContributor = () => {
  const { id } = useParams();

  return (
    <Content>
      <EditContributor id={id} />
    </Content>
  );
};

export default PageEditContributor;

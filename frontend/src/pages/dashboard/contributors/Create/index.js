import CreateContributor from "../../../../components/dashboard/contributors/Create";
import { Content } from "../../../../styles";
import { useParams } from "react-router-dom";

function PageCreateContributor() {
  const { id } = useParams();

  return (
    <Content>
      <CreateContributor id={id} />
    </Content>
  );
}

export default PageCreateContributor;

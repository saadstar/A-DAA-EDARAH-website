
import PageTransition from "../component/PageTransition";
import HeaderTopArea from '../component/HeaderTopArea';
import HeaderArea from '../component/HeaderArea';
import RequestForm from "../component/RequestForm";
import FooterArea from "../component/FooterArea";

const ValuationRequest = () => {
  

  return (       
    <PageTransition>
     <HeaderTopArea/>
    <HeaderArea/>
    <RequestForm/>
      <FooterArea/>
      </PageTransition>    
  );
};

export default ValuationRequest; 
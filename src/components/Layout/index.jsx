import Intro from "../Intro"
import Offers from "../Offers"
import OrderForm from "../OrderForm"

const index = () => {
    return (
      <main className="bg-[#edf3f7] pt-5">
        <Intro />
        <Offers/>
        <OrderForm/>
      </main>
    );
};

export default index;

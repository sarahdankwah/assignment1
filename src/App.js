


import Mypropscomponent from './Mypropscomponent';
import Mysecondprops from './Mypropscomponent'
import Agyemang from './Mypropscomponent'
import Francis from './Mypropscomponent'
import Mylastcomponent from './Mypropscomponent'
// import Parentcomponent from './parentcomponent'
import Dashboardcomponent from './Assignment3/Dashboardcomponent'
import Counter from './state/counter';
import Brown from './state/brown';
function App() {
  return (
     <div>
     <Mypropscomponent name="Gideon" height="17" />
     <Mysecondprops name="adwoa" height="15"/>
     <Agyemang name="kwaku" height="20" />
     <Francis name="kofi" height="25"/>
     <Mylastcomponent name="Gloria" height="50"/>
     <div>
         {/* <h1><Parentcomponent name="Gideon" age="25" gender="male" email="ogbrown@gmail.com"/></h1> */}
         {/* <h1><Dashboardcomponent dbname="Gideon" dblname="Brown" dbemail="ogidibrown@gmail.com" dbdob="7-12-1992" /></h1> */}
     </div>
     <Counter/>
     <Brown/>

    </div>
  );
}

export default App;
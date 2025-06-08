import{Routes,Route} from 'react-router-dom';
import './App.css';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Team from './components/Team';
import Projects from './components/Projects';
import ClimateBootcamp2023 from './Projects/ClimateBootcamp-2023';
import ClimateBootcamp2024 from './Projects/ClimateBootcamp-2024';
import CommunityEngagement from './components/CommunityEngagement';
import EbenebeAgriculturalEmpowermentProgramme from './Projects/Ebenebe-Agriculture-Empowerment-Programme';
import EbenebeClimateResilienceWorkshop from './Projects/Ebenebe-Climate-Resilience-Workshop';
import EbenebeCommunityEngagement from './Projects/Ebenebe-Community-Engagement';
import EcoRestorationForClimateAction from './Projects/Eco-Restoration-for-Climate-Action';
import GreenHangout2022 from './Projects/GreenHangout-2022';
import Membership from './components/Membership';
import Volunteer from './components/Volunteer';
import EnvironmentalEducation from './components/Environmental-Education';
import WorldEarthDay2024 from './Projects/WorldEarthDay-2024';
import WorldEnvironmentDay2024 from './Projects/WorldEnvironmentDay-2024';
import WorldForestDay2022 from './Projects/WorldForestDay-2022';
import ClimateBootcamp from './components/Climate-Bootcamp';
import NatureLabProject from './components/Nature-Lab-Project';
import TreeNurseryProject from './Projects/Tree-Nursery-project';
import TreePlantingProject from './Projects/Tree-planting-project';
import YouthClimatePolicy from './Projects/YouthClimatePolicy'
import Blogs from './components/Blog';
import ConceptOfEnvironmentalEducation from './Blog/Concept-of-Environmental-Education';
import TheRoleOfCommunityEngagementInEnvironmentalEducation from './Blog/The-Role-of-Community-Engagement-in-Environmental-Education';
import Events from './components/Events';
import YouthPolicyTraining from './Events/Youth-Policy-Training';
import EnvironmentalStemMiniGrantApplication from './Events/Environmental-STEM-mini-grant-application';
import ClimateBootcamp2025Application from './Events/Climate-Bootcamp-3-0';
import ImpactReport from './components/Impact-Report';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/Team' Component={Team} />
        <Route path='/Impact-Report' Component={ImpactReport} />
        <Route path='/Projects' Component={Projects} />
        <Route path='/CommunityEngagement' Component={CommunityEngagement} />
        <Route path='/Climate-Bootcamp' Component={ClimateBootcamp} />
        <Route path='/Environmental-Education' Component={EnvironmentalEducation} />
        <Route path='/Nature-Lab-Project' Component={NatureLabProject} />
        <Route path='/Projects/ClimateBootcamp-2023' Component={ClimateBootcamp2023} />
        <Route path='/Projects/ClimateBootcamp-2024' Component={ClimateBootcamp2024} />
        <Route path='/blog' Component={Blogs} />
        <Route path='/Events' Component={Events} />
        <Route path='/Membership' Component={Membership} />
        <Route path='/Volunteer' Component={Volunteer} />
        <Route path='/Projects/Ebenebe-Agriculture-Empowerment-Programme' Component={EbenebeAgriculturalEmpowermentProgramme}/>
        <Route path='/Projects/Ebenebe-Climate-Resilience-Workshop' Component={EbenebeClimateResilienceWorkshop} />
        <Route path='/Projects/Ebenebe-Community-Engagement' Component={EbenebeCommunityEngagement} />
        <Route path='/Projects/Eco-Restoration-for-Climate-Action' Component={EcoRestorationForClimateAction} />
        <Route path='/Projects/GreenHangout' Component={GreenHangout2022} />
        <Route path='/Projects/WorldEarthDay-2024' Component={WorldEarthDay2024} />
        <Route path='/Projects/WorldEnvironmentDay-2024' Component={WorldEnvironmentDay2024} />
        <Route path='/Projects/WorldForestDay-2022' Component={WorldForestDay2022} />
        <Route path='/Projects/Tree-Nursery-project' Component={TreeNurseryProject} />
        <Route path='/Projects/Tree-planting-project' Component={TreePlantingProject} />
        <Route path='/Projects/YouthClimatePolicy' Component={YouthClimatePolicy} />
        <Route path='/Blog/Concept-of-Environmental-Education' Component={ConceptOfEnvironmentalEducation} />
        <Route path='/Blog/The-Role-of-Community-Engagement-in-Environmental-Education' Component={TheRoleOfCommunityEngagementInEnvironmentalEducation} />
        <Route path='/Events/Youth-Policy-Training' Component={YouthPolicyTraining} />
        <Route path='/Events/Environmental-STEM-mini-grant-application' Component={EnvironmentalStemMiniGrantApplication} />
        <Route path='/Events/Climate-Bootcamp-3-0' Component={ClimateBootcamp2025Application} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

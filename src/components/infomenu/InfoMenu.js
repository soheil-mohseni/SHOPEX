import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddCardIcon from '@mui/icons-material/AddCard';


function InfoMenu() {
  return (
    <div style={{marginTop: '111px'}} class="card">
        <div class="flex flex-wrap justify-content-center card-container blue-container gap-6">
            <div style={{direction:"rtl"}} class="border-round w-13rem h-6rem  text-white font-bold flex align-items-end justify-content-end">
                <div class="border-round w-3rem h-6rem  text-white font-bold flex align-items-center justify-content-center">
                    <LocationOnIcon sx={{fontSize: "69px",color:'red'}}/>
                </div>
                <div class="border-round w-12rem h-6rem pr-3 text-white font-bold flex align-items-center justify-content-center"><h2 style={{color: "gray"}}> ارسال به تمام نقاط ایران </h2></div>

            </div>
            <div style={{direction:"rtl"}} class="border-round w-14rem h-6rem  text-white font-bold flex align-items-end justify-content-end">
                <div class="border-round w-2rem h-6rem  text-white font-bold flex align-items-center justify-content-center">
                    <AccessTimeFilledIcon sx={{fontSize: "69px",color:'greenyellow'}}/>
                </div>
                <div class="border-round w-14rem h-6rem pr-4 text-white font-bold flex align-items-center justify-content-center"><h2 style={{color: "gray"}}> تحویل در کمترین زمان ممکن </h2></div>

            </div>
            <div style={{direction:"rtl"}} class="border-round w-13rem h-6rem  text-white font-bold flex align-items-end justify-content-end">
                <div class="border-round w-3rem h-6rem  text-white font-bold flex align-items-center justify-content-center">
                    <LocalShippingIcon sx={{fontSize: "69px",color:'red'}}/>
                </div>
                <div class="border-round w-13rem h-6rem pr-2 text-white font-bold flex align-items-center justify-content-center"><h2 style={{color: "gray"}}> ارسال رایگان </h2></div>
            </div>
            <div style={{direction:"rtl"}} class="border-round w-13rem h-6rem  text-white font-bold flex align-items-end justify-content-end">
                <div class="border-round w-3rem h-6rem  text-white font-bold flex align-items-center justify-content-center">
                    <AddCardIcon sx={{fontSize: "69px",color:'greenyellow'}}/>
                </div>
                <div class="border-round w-13rem h-6rem pr-2 text-white font-bold flex align-items-center justify-content-center"><h2 style={{color: "gray"}}> پرداخت آسان </h2></div>
            </div>
        </div>
    </div>
  );
}

export default InfoMenu;

import React from 'react'

import styles from "./Dropdown.module.scss";
const Dropdown = ( { className, label, text, ...props } ) => {
    return (
        <div className={styles.field}>
            {label && <div className={styles.label}>{label}</div>}
            <div className={styles.wrap}>
                {/* <input className={styles.input} {...props} /> */}
                <select name="state" id="state" className={styles.select}>
//                   <option value="">Select</option>
//                   <option value="Andhra Pradesh">Andhra Pradesh (Fee Rs.590)</option>
//                   <option value="Arunachal Pradesh">Arunachal Pradesh (Fee Rs.590)</option>
//                   <option value="Assam">Assam (Fee Rs.590)</option>
//                   <option value="Bihar">Bihar (Fee Rs.590)</option>
//                   <option value="Chandigarh">Chandigarh (Fee Rs.590)</option>
//                   <option value="Chhattisgarh">Chhattisgarh (Fee Rs.590)</option>
//                   <option value="Delhi">Delhi (Fee Rs.590)</option>
//                   <option value="Goa">Goa (Fee Rs.590)</option>
//                   <option value="Gujarat">Gujarat (Fee Rs.590)</option>
//                   <option value="Haryana">Haryana (Fee Rs.590)</option>
//                   <option value="Himachal Pradesh">Himachal Pradesh (Fee Rs.590)</option>
//                   <option value="Jammu and Kashmir">Jammu and Kashmir (Fee Rs.590)</option>
//                   <option value="Jharkhand">Jharkhand (Fee Rs.590)</option>
//                   <option value="Karnataka">Karnataka (Fee Rs.590)</option>
//                   <option value="Kerala">Kerala (Fee Rs.590)</option>
//                   <option value="Madhya Pradesh">Madhya Pradesh (Fee Rs.590)</option>
//                   <option value="Maharashtra">Maharashtra (Fee Rs.590)</option>
//                   <option value="Manipur">Manipur (Fee Rs.590)</option>
//                   <option value="Meghalaya">Meghalaya (Fee Rs.590)</option>
//                   <option value="Mizoram">Mizoram (Fee Rs.590)</option>
//                   <option value="Nagaland">Nagaland (Fee Rs.590)</option>
//                   <option value="Odisha">Odisha (Fee Rs.590)</option>
//                   <option value="Punjab">Punjab (Fee Rs.590)</option>
//                   <option value="Rajasthan">Rajasthan (Fee Rs.590)</option>
//                   <option value="Sikkim">Sikkim (Fee Rs.590)</option>
//                   <option value="Tamil Nadu">Tamil Nadu (Fee Rs.590)</option>
//                   <option value="Telangana">Telangana (Fee Rs.590)</option>
//                   <option value="Tripura">Tripura (Fee Rs.590)</option>
//                   <option value="Uttar Pradesh">Uttar Pradesh (Fee Rs.590)</option>
//                   <option value="Uttarakhand">Uttarakhand (Fee Rs.590)</option>
//                   <option value="West Bengal">West Bengal (Fee Rs.590)</option>
//               </select>
            </div>
        </div>
    );
};

export default Dropdown;
// const Dropdown = () => {
//   return (
//       <>
//           <div className={styles.field}>
//             {label && <div className={styles.label}>{label} <span>*</span></div>}
//             <div className={styles.wrap}>
//                 <input className={styles.input} {...props} />
//             </div>
//             <div className={styles.text}>{text}</div>
//         </div>
//           <div>
//               <label htmlFor="">dfs</label>
//               <select name="state" id="state" class="form-control">
//                   <option value="">Select</option>
//                   <option value="Andhra Pradesh">Andhra Pradesh (Fee Rs.590)</option>
//                   <option value="Arunachal Pradesh">Arunachal Pradesh (Fee Rs.590)</option>
//                   <option value="Assam">Assam (Fee Rs.590)</option>
//                   <option value="Bihar">Bihar (Fee Rs.590)</option>
//                   <option value="Chandigarh">Chandigarh (Fee Rs.590)</option>
//                   <option value="Chhattisgarh">Chhattisgarh (Fee Rs.590)</option>
//                   <option value="Delhi">Delhi (Fee Rs.590)</option>
//                   <option value="Goa">Goa (Fee Rs.590)</option>
//                   <option value="Gujarat">Gujarat (Fee Rs.590)</option>
//                   <option value="Haryana">Haryana (Fee Rs.590)</option>
//                   <option value="Himachal Pradesh">Himachal Pradesh (Fee Rs.590)</option>
//                   <option value="Jammu and Kashmir">Jammu and Kashmir (Fee Rs.590)</option>
//                   <option value="Jharkhand">Jharkhand (Fee Rs.590)</option>
//                   <option value="Karnataka">Karnataka (Fee Rs.590)</option>
//                   <option value="Kerala">Kerala (Fee Rs.590)</option>
//                   <option value="Madhya Pradesh">Madhya Pradesh (Fee Rs.590)</option>
//                   <option value="Maharashtra">Maharashtra (Fee Rs.590)</option>
//                   <option value="Manipur">Manipur (Fee Rs.590)</option>
//                   <option value="Meghalaya">Meghalaya (Fee Rs.590)</option>
//                   <option value="Mizoram">Mizoram (Fee Rs.590)</option>
//                   <option value="Nagaland">Nagaland (Fee Rs.590)</option>
//                   <option value="Odisha">Odisha (Fee Rs.590)</option>
//                   <option value="Punjab">Punjab (Fee Rs.590)</option>
//                   <option value="Rajasthan">Rajasthan (Fee Rs.590)</option>
//                   <option value="Sikkim">Sikkim (Fee Rs.590)</option>
//                   <option value="Tamil Nadu">Tamil Nadu (Fee Rs.590)</option>
//                   <option value="Telangana">Telangana (Fee Rs.590)</option>
//                   <option value="Tripura">Tripura (Fee Rs.590)</option>
//                   <option value="Uttar Pradesh">Uttar Pradesh (Fee Rs.590)</option>
//                   <option value="Uttarakhand">Uttarakhand (Fee Rs.590)</option>
//                   <option value="West Bengal">West Bengal (Fee Rs.590)</option>
//               </select>
//                </div>
//       </>
//   )
// }

// export default Dropdown
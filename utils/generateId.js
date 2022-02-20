import CouponJS from "couponjs";

export default async function ( suffix ) {
    const coupon = new CouponJS();
    let myCoupon = coupon.generate( {
        length: 10,
        prefix: "RTIM",
        suffix: suffix,
        characterSet: {
            builtIn: ["CHARSET_DIGIT"],
        }
    } );
    return myCoupon
}
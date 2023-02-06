import express from "express";
import { getMyOrders, placeOrderOnline, processOrder } from "../controllers/order.js";
import { getOrderDetails } from "../controllers/order.js";
import { getAdminOrders } from "../controllers/order.js";
import { placeOrder } from "../controllers/order.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/Auth.js";

const router=express.Router();

router.post("/createorder",placeOrder);
router.post("/createorderonline",placeOrderOnline)
router.get("/myOrders",isAuthenticated,getMyOrders);
router.get("/order/:id", isAuthenticated, getOrderDetails);
router.get("/admin/orders", isAuthenticated,authorizeAdmin, getAdminOrders);
router.get("/admin/order/:id", isAuthenticated,authorizeAdmin, processOrder );
export default router;
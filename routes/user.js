import express from 'express';
import passport from 'passport';
const router=express.Router();
import {myProfile,logout, getAdminUsers, getAdminStats} from "../controllers/user.js"
import { authorizeAdmin, isAuthenticated } from '../middlewares/Auth.js';

router.get("/googlelogin",passport.authenticate("google",{
    scope:["profile"],
}));

router.get(
  "/mbaburgerwala-pax9.vercel.app/api/v1/login",
  passport.authenticate("google"),
  (req,res,next)=>{
    res.send("LOGGED IN")
  }
);
router.get("/api/v1/me",isAuthenticated,myProfile)

router.get("/api/v1/logout", logout)
router.get("/api/v1/admin/users", isAuthenticated,authorizeAdmin,getAdminUsers);
router.get("/api/v1/admin/stats", isAuthenticated,authorizeAdmin,getAdminStats);
export default router;



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

  (req,res,next)=>{
    res.send("LOGGED IN")
  }
);
router.get("/me",isAuthenticated,myProfile)

router.get("/logout", logout)
router.get("/admin/users", isAuthenticated,authorizeAdmin,getAdminUsers);
router.get("/admin/stats", isAuthenticated,authorizeAdmin,getAdminStats);
export default router;



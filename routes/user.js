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
  passport.authenticate("google", {
    successRedirect: process.env.FRONTEND_URL,
  })
);
router.get("/me",isAuthenticated,myProfile)

router.get("/logout", logout)
router.get("/admin/users", isAuthenticated,authorizeAdmin,getAdminUsers);
router.get("/admin/stats", isAuthenticated,authorizeAdmin,getAdminStats);
export default router;



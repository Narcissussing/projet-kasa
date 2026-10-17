import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import AccueilPage from "../pages/AccueilPage";
import AProposPage from "../pages/AProposPage";
import ErreurPage from "../pages/ErreurPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<AccueilPage />} />
        <Route path="a-propos" element={<AProposPage />} />
        <Route path="*" element={<ErreurPage />} />
      </Route>
    </Routes>
  );
}

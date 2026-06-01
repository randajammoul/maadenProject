import { create } from "zustand";

export interface PagesStructure {
  mainPage: number;
  subMenuPageLevel1: number;
}

export const initialCurrentPageState = {
  mainPage: 0,
  subMenuPageLevel1: -1,
};

interface AppStore {
  menuOpen: boolean;
  rtlLanguage: boolean;
  currentPage: PagesStructure;
  logoToggled: boolean;
  menuPressedAtLeastOnce: boolean;
  videoPopUp: boolean;
  irOpen: boolean;
  changePage: (currentPage: PagesStructure) => void;
  toggleLanguage: () => void;
  toggleMenu: () => void;
  toggleLogo: () => void;
  toggleVideoPopUp: () => void;
  toggleIR: () => void;
}

const useAppStore = create<AppStore>((set) => ({
  rtlLanguage: false,
  menuOpen: false,
  irOpen:false,
  currentPage: initialCurrentPageState,
  logoToggled: false,
  videoPopUp: false,
  menuPressedAtLeastOnce: false,
  changePage: (currentPage) => {
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    set(() => ({ currentPage }));
  },
  toggleLanguage: () => {
    // const rtl = document.body.getAttribute("dir");
    // if (rtl !== "rtl") document.body.setAttribute("dir", "rtl");
    // else document.body.setAttribute("dir", "ltr");
    // set((store) => ({ rtlLanguage: !store.rtlLanguage }));
    set((store) => {
      const newRtlLanguage = !store.rtlLanguage;
      const params = new URLSearchParams(window.location.search);
      params.set("lang", newRtlLanguage ? "ar" : "en");
      document.body.setAttribute("dir", newRtlLanguage ? "rtl" : "ltr");
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${params.toString()}`
      );
      return { rtlLanguage: newRtlLanguage };
    });
  },
  toggleMenu: () =>
    set((store) => ({
      menuOpen: !store.menuOpen,
      menuPressedAtLeastOnce: true,
    })),
  toggleVideoPopUp: () => set((store) => ({ videoPopUp: !store.videoPopUp })),

  // toggleLogo: () =>
  //   set((store) => ({
  //     logoToggled: !store.logoToggled,
  //     currentPage: initialCurrentPageState,
  //   })),

    toggleLogo: () => {
    window.location.reload();
  },

    toggleIR: () => set((store) => ({ irOpen: !store.irOpen })),
}));

export default useAppStore;

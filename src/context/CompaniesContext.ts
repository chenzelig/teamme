import React from "react";
import { observable, action, makeObservable } from "mobx";

class CompaniesStore {
  currentIndex: number = 0;

  constructor() {
    makeObservable(this, {
      currentIndex: observable,
      setCurrentIndex: action.bound,
    });
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
  }
}

const companiesStore = new CompaniesStore();

const companiesContext = React.createContext(companiesStore);

export const useCompaniesStore = () => React.useContext(companiesContext);

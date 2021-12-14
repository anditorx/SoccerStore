import {createNavigationContainerRef} from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef?.navigate(name, params);
  }
}

export function replace(name, params) {
  if (navigationRef.isReady()) {
    navigationRef?.replace(name, params);
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef?.goBack();
  }
}

export function pop(n) {
  if (navigationRef.isReady()) {
    navigationRef?.pop(n);
  }
}

export function popToTop() {
  if (navigationRef.isReady()) {
    navigationRef?.popToTop();
  }
}

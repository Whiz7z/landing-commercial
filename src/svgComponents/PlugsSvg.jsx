
function PlugsSvg( {w, h, fill}) {
  return (
    <svg
      width={w||'15'}
      height={h||'15'}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.76916 8.76902L7.69396 9.84363L8.76916 10.9182C8.81271 10.9618 8.84726 11.0135 8.87083 11.0704C8.8944 11.1273 8.90653 11.1883 8.90653 11.2499C8.90653 11.3115 8.8944 11.3725 8.87083 11.4294C8.84726 11.4863 8.81271 11.538 8.76916 11.5815C8.72561 11.6251 8.6739 11.6596 8.617 11.6832C8.5601 11.7068 8.49911 11.7189 8.43752 11.7189C8.37593 11.7189 8.31494 11.7068 8.25803 11.6832C8.20113 11.6596 8.14943 11.6251 8.10588 11.5815L7.73439 11.2094L6.36857 12.5759C6.01647 12.9267 5.53966 13.1237 5.04259 13.1237C4.54552 13.1237 4.06872 12.9267 3.71662 12.5759L3.40197 12.2606L1.73791 13.9253C1.69436 13.9688 1.64265 14.0034 1.58575 14.0269C1.52885 14.0505 1.46786 14.0626 1.40627 14.0626C1.34468 14.0626 1.28369 14.0505 1.22678 14.0269C1.16988 14.0034 1.11818 13.9688 1.07463 13.9253C1.03107 13.8817 0.996527 13.83 0.972957 13.7731C0.949387 13.7162 0.937256 13.6552 0.937256 13.5936C0.937256 13.532 0.949387 13.4711 0.972957 13.4141C0.996527 13.3572 1.03107 13.3055 1.07463 13.262L2.73927 11.5979L2.42404 11.2833C2.24988 11.1092 2.11173 10.9024 2.01748 10.6749C1.92323 10.4474 1.87471 10.2036 1.87471 9.9573C1.87471 9.71104 1.92323 9.46719 2.01748 9.23967C2.11173 9.01216 2.24988 8.80544 2.42404 8.63133L3.79045 7.26551L3.41838 6.89402C3.33042 6.80606 3.28101 6.68677 3.28101 6.56238C3.28101 6.43799 3.33042 6.3187 3.41838 6.23074C3.50633 6.14278 3.62563 6.09337 3.75002 6.09337C3.87441 6.09337 3.9937 6.14278 4.08166 6.23074L5.15627 7.30594L6.23088 6.23074C6.31883 6.14278 6.43813 6.09337 6.56252 6.09337C6.68691 6.09337 6.8062 6.14278 6.89416 6.23074C6.98211 6.3187 7.03153 6.43799 7.03153 6.56238C7.03153 6.68677 6.98211 6.80606 6.89416 6.89402L5.81896 7.96863L7.03127 9.18093L8.10588 8.10574C8.19383 8.01778 8.31313 7.96837 8.43752 7.96837C8.56191 7.96837 8.6812 8.01778 8.76916 8.10574C8.85711 8.1937 8.90653 8.31299 8.90653 8.43738C8.90653 8.56177 8.85711 8.68106 8.76916 8.76902ZM13.9254 1.07449C13.8819 1.03091 13.8302 0.996333 13.7733 0.972743C13.7164 0.949154 13.6554 0.937012 13.5938 0.937012C13.5322 0.937012 13.4712 0.949154 13.4143 0.972743C13.3574 0.996333 13.3057 1.03091 13.2621 1.07449L11.5981 2.73914L11.2834 2.4239C10.9314 2.0729 10.4546 1.87579 9.95744 1.87579C9.46032 1.87579 8.98349 2.0729 8.63146 2.4239L7.26564 3.79031L6.89416 3.41824C6.8062 3.33028 6.68691 3.28087 6.56252 3.28087C6.43813 3.28087 6.31883 3.33028 6.23088 3.41824C6.14292 3.5062 6.09351 3.62549 6.09351 3.74988C6.09351 3.87427 6.14292 3.99356 6.23088 4.08152L10.9184 8.76902C10.9619 8.81257 11.0136 8.84712 11.0705 8.87069C11.1274 8.89426 11.1884 8.90639 11.25 8.90639C11.3116 8.90639 11.3726 8.89426 11.4295 8.87069C11.4864 8.84712 11.5381 8.81257 11.5817 8.76902C11.6252 8.72547 11.6598 8.67377 11.6833 8.61686C11.7069 8.55996 11.719 8.49897 11.719 8.43738C11.719 8.37579 11.7069 8.3148 11.6833 8.2579C11.6598 8.20099 11.6252 8.14929 11.5817 8.10574L11.2096 7.73426L12.576 6.36844C12.7501 6.19432 12.8883 5.9876 12.9826 5.76009C13.0768 5.53258 13.1253 5.28872 13.1253 5.04246C13.1253 4.79619 13.0768 4.55234 12.9826 4.32483C12.8883 4.09731 12.7501 3.8906 12.576 3.71648L12.2608 3.40183L13.9254 1.73777C13.969 1.69424 14.0036 1.64254 14.0272 1.58563C14.0507 1.52873 14.0629 1.46773 14.0629 1.40613C14.0629 1.34453 14.0507 1.28353 14.0272 1.22663C14.0036 1.16972 13.969 1.11802 13.9254 1.07449Z"
        fill={fill||'#050505'}
      />
    </svg>
  );
}

export default PlugsSvg
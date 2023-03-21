import React, { ReactNode } from "react";
import {
  Box,
  Text,
  CornerBar,
  Swiper,
  useSwiper,
  HStack,
  ButtonBase,
} from "@frenchies-spots/materials";

import { styles } from "./create-spot-page-styles";

export const CreateSpotPage = () => {
  const { swiperRef, currentIndex, goToNextIndex, goToPrevIndex } = useSwiper();

  const SwiperLayout = ({ children }: { children: ReactNode }) => {
    console.log({ currentIndex });
    console.log({ max: SwipItems.length });
    return (
      <Box style={styles.swiperLayout}>
        {children}
        <HStack style={styles.buttonBar}>
          <ButtonBase onPress={goToPrevIndex} disabled={currentIndex === 0}>
            Retour
          </ButtonBase>
          <ButtonBase
            onPress={goToNextIndex}
            disabled={currentIndex === SwipItems.length - 1}
          >
            Suivant
          </ButtonBase>
        </HStack>
      </Box>
    );
  };

  const SwipItems = [
    <SwiperLayout>
      <Text>Première Page</Text>
    </SwiperLayout>,
    <SwiperLayout>
      <Text>Deuxième Page</Text>
    </SwiperLayout>,
    <SwiperLayout>
      <Text>Troisième Page</Text>
    </SwiperLayout>,
    <SwiperLayout>
      <Text>Quatrième Page</Text>
    </SwiperLayout>,
  ];

  return (
    <Box style={{ width: "100%", height: "100%" }}>
      {/* <CornerBar mode="top" /> */}
      <Swiper swiperRef={swiperRef} items={SwipItems} />
    </Box>
  );
};

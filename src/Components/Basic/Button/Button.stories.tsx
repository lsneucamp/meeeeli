import React from "react";
import {boolean} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";

import {Flex} from "@Styled/Home";
import {Button} from "./index";

export default {
    component: Button,
    title: "Button",
};

export const Default = () => (
    <Flex>
        <Button
            disabled={boolean("Disabled", false)}
            onClick={action("button-click")}
        >
            Comprar
        </Button>
    </Flex>
);

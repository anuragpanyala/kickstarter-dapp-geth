import React from 'react';
import { Menu } from 'semantic-ui-react';

export default () => {
    return(
        <Menu>
            <Menu.Item>
                JaiCoin
            </Menu.Item>

            <Menu.Menu position = 'right' >
                <Menu.Item>
                    Campiagns
                </Menu.Item>

                <Menu.Item>
                    +
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}
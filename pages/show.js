import React from 'react';
import { Button } from 'semantic-ui-react'
import Layout from '../components/Layout';

export default () => {
    return (
        <Layout>
            <div>
                <link 
                    rel="stylesheet" 
                    href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css" 
                />
                <h3>Open Campaigns</h3>
                <Button content="Create Campaign" icon="add circle" primary />
            </div>
        </Layout>
    ) 
};
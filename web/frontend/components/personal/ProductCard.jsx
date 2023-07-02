import {
    LegacyCard,
    ResourceList,
    Avatar,
    ResourceItem,
    Text,
  } from '@shopify/polaris';
  import React from 'react';

const ProductCard = (props) => {
    return (
        <LegacyCard>
          <ResourceList
            resourceName={{singular: 'customer', plural: 'customers'}}
            // items={[
            //   {
            //     id: '145',
            //     url: '#',
            //     avatarSource:
            //       'https://burst.shopifycdn.com/photos/freelance-designer-working-on-laptop.jpg?width=746',
            //     name: 'Yi So-Yeon',
            //     location: 'Gwangju, South Korea',
            //   },
            // ]}
            items={props.item}
            renderItem={(item) => {
              const {id,  title, price} = item;
    
              return (
                <ResourceItem
                  id={id}
                 // url={url}
                //   media={
                //     <Avatar
                //       customer
                //       size="medium"
                //       name={name}
                //       source={avatarSource}
                //     />
                //   }
                  accessibilityLabel={`View details for ${title}`}
                  name={title}
                >
                  <Text variant="bodyMd" fontWeight="bold" as="h3">
                    {title}
                  </Text>
                  <div>{price}</div>
                </ResourceItem>
              );
            }}
          />
        </LegacyCard>
      );
}

  
 

export default ProductCard
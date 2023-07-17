# XCHAIN
#### Video Demo:  <URL HERE>

#### Description:

Version v0.1.0

## Introduction
The crypto and NFT market have been on a steady rise since 2017, with NFTs gaining immense popularity amongst tech enthusiasts, artists, and collectors. NFT traders tend to have a "native" cryptocurrency such as ETH or SOL with which they conduct most of their transactions. That being said, the typical NFT trader is on the lookout for opportunities in different chains, for diversification or to explore new ground. However, going into a new chain is a highly frictional process, which involves bridging assets from the native chain to the new chain, and having an understanding of the value of the assets in the new chain in relation to the native chain. 

The XChain Chrome Extension solves the latter. It is a responsive cryptocurrency converter, made for and by NFT traders, with support for the top 5 biggest blockchains by market cap and daily volume. The v1 of the app enables instant currency conversion, powered by the [Coingecko Public API](https://www.coingecko.com/en/api). 

## Supported Currencies (v1):
- Ethereum (ETH)
- Solana (SOL)
- Bitcoin (BTC)
- Polygon (MATIC)
- Binance (BNB)
- US Dollar (USD)


The Package Contents:
1. `index.html`: 
    Consists of Logos, and bootstrap-powered input forms, and swap and refresh buttons, with select menus for the currencies. 

2. `styles.css`:
    CSS file with styling for head and body

3. `script.js`:
    JS file with an API fetch of the Coingecko Public API which is called upon loading, and refreshable by the user (with a 60s cooldown). EventListeners for Swaps, Refreshes, and changes to input forms and select menus on the from/to end. The fetched API data is stored in a local variable in order to optimize the number of queries made. The rate limit of Coingecko's API is 10-30 calls per minute, and the app ensures that the user cannot abuse the refresh button. As all 5 currencies are fetched in one query, no additional query is made subsequently until refreshed by the user, ensuring that rate limits are respected. 

4. `manifest.json`:
    Manifest 3 file containing metadata for the Chrome Extension, including name, version ID, description, etc. The commands parameter enables users to open the extension with the Ctrl+Shift+X shortcut

5. Images including logos and icons. 


## Design choices:

The Xchain logo was made using Photopea, a free Photoshop alternative online. Bootstrap was used for its simplicity.
Coingecko's API was chosen as it is an effective free option that provides pricing info for multiple tokens with a single API call. The CMC API was considered initially but would require making 2 API calls every time the selected currency(s) are changed. 

## Future:

This v0.1 of Xchain is intended to be an MVP for NFT traders to quickly convert cryptos to their "native" currency which enables them to make better-informed decisions when transacting in different chains. 

Future updates will include HTML injections to popular NFT marketplaces with the currency conversion done automatically for the user. 
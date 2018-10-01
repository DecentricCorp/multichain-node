//from-address / to-address simply called from and to
//data-hex called data, tx-hex called tx
//unnamed requested / locking assets object called "assets"
//listunspent: unnamed array of addresses called receivers
//lockunspent: unnamed array of outputs called outputs
//createrawtransaction: unnamed called inputs and amounts
//addnode: ip for ip:port

const startDefault = args => { return args.count * -1; }

module.exports = {
    //general
    getBlockchainParams: [{"display-names": true}, {"with-upgrades": true}],
    getRuntimeParams: [],
    setRunTimeparam: ["param", "value"],
    getInfo: [],
    help: [],
    stop: [],
    //wallet addresses
    addMultiSigAddress: ["nrequired", "keys"],
    getAddresses: [{"verbose": false}],
    getNewAddress: [],
    importAddress: ["address", {"label": ""}, {"rescan": true}],
    listAddresses: [{"addresses": "*"}, {"verbose": false}, {"count": "MAX"}, {"start": null}],
    //non-wallet addresses
    createKeyPairs: [{"count": 1}],
    createMultiSig: ["nrequired", "keys"],
    validateAddress: ["address"],
    //permissions
    grant: ["addresses", "permissions", {"native-amount":null}, {"start-block": null}, {"end-block": null}, {"comment": null}, {"comment-to": null}],
    grantFrom: ["from", "to", "permissions", {"native-amount":null}, {"start-block": null}, {"end-block": null}, {"comment": null}, {"comment-to": null}],
    grantWithData: ["addresses", "permissions", "data", {"native-amount":null}, {"start-block": null}, {"end-block": null}, {"cache": null}, {"text": null}, {"json": null}, {"for": null}, {"keys": null}, {"data": null}, {"options": null}],
    grantWithMetadata: ["addresses", "permissions", "data", {"native-amount":null}, {"start-block": null}, {"end-block": null}],
    grantWithDatafrom:["from", "to", "permissions", "data", {"native-amount":null}, {"start-block": null}, {"end-block": null}, {"cache": null}, {"text": null}, {"json": null}, {"for": null}, {"keys": null}, {"data": null}, {"options": null}],
    grantWithMetadataFrom: ["from", "to", "permissions", "data", {"native-amount":null}, {"start-block": null}, {"end-block": null}],
    listPermissions: [{"permissions": "all"}, {"addresses": "*"}, {"verbose": false}],
    revoke: ["addresses", "permissions", {"native-amount":0}, {"comment": ""}, {"comment-to": ""}],
    revokeFrom: ["from", "to", "permissions", {"native-amount":0}, {"comment": ""}, {"comment-to": ""}],
    //assets
    issue: ["address", "asset", "qty", {"units": 1}, {"native-amount":0}, {"details": {}}, {"restrict": null}],
    issueFrom: ["from", "to", "asset", "qty", {"units": 1}, {"native-amount": 0}, {"details": {}}, {"restrict": null}],
    issueMore: ["address", "asset", "qty", {"native-amount":0}, {"details": {}}],
    issueMoreFrom: ["from", "to", "asset", "qty", {"native-amount":0}, {"details": {}}],
    listAssets: [{"asset": ""}, {"verbose": false}, {"count": 10}, {"start": startDefault}],
    //querying
    getAddressBalances: ["address", {"minconf": 1}, {"includeLocked": false}],
    getAddressTransaction: ["address", "txid", {"verbose": false}],
    getMultiBalances: [{"addresses": "*"}, {"assets": []}, {"minconf":1}, {"includeWatchOnly": false}, {"includeLocked": false}],
    getTotalBalances: [{"minconf": 1}, {"includeWatchOnly": false}, {"includeLocked": false}],
    getWalletTransaction: ["txid", {"includeWatchOnly": false}, {"verbose": false}],
    listAddressTransactions: ["address", {"count": 10}, {"skip": 0}, {"verbose": false}],
    listWalletTransactions: [{"count": 10}, {"skip": 0}, {"includeWatchOnly": false}, {"verbose": false}],
    //sending
    send: ["address", "amount", {"comment": ""}, {"comment-to": ""}],
    sendToAddress: ["address", "amount", {"comment": ""}, {"comment-to": ""}],
    sendAsset: ["address", "asset", "qty", {"native-amount": 0}, {"comment": ""}, {"comment-to": ""}],
    sendAssetToAddress: ["address", "asset", "qty", {"native-amount": 0}, {"comment": ""}, {"comment-to": ""}],
    sendAssetFrom: ["from", "to", "asset", "qty", {"native-amount":0}, {"comment": ""}, {"comment-to": ""}],
    sendFrom: ["from", "to", "amount", {"comment": ""}, {"comment-to": ""}],
    sendwithData: ["address", "amount", "data", {"cache": null}, {"text": null}, {"json": null}, {"for": null}, {"keys": null}, {"data": null}, {"options": null}], 
    sendWithMetadata: ["address", "amount", "data"],
    sendwithDataFrom: ["address", "amount", "data", {"cache": null}, {"text": null}, {"json": null}, {"for": null}, {"keys": null}, {"data": null}, {"options": null}],
    sendWithMetadataFrom: ["from", "to", "amount", "data"],
    sendFromAddress: ["from", "to", "amount", {"comment": ""}, {"comment-to": ""}],
    //atomic exchange
    appendRawExchange: ["hexstring", "txid", "vout", "assets"],
    completeRawExchange: ["hexstring", "txid", "vout", "assets", "data", {"cache": null}, {"text": null}, {"json": null}, {"for": null}, {"keys": null}, {"data": null}, {"options": null}],
    createRawExchange: ["txid", "vout", "assets"],
    decodeRawExchange: ["hexstring", {"verbose": false}],
    disableRawTransaction: ["hexstring"],
    prepareLockUnspent: ["assets", {"lock": true}],
    prepareLockUnspentFrom: ["from", "assets", {"lock": true}],
    //stream management
    create: ["type", "name", "open", {"details": {}}, {"restrictions": null}, {"js-code": null}],
    createFrom: ["from", "type", "name", "open", {"details": {}}, {"restrictions": null}, {"js-code": null}],
    listStreams: [{"stream": "*"}, {"verbose": false}, {"count": undefined}, {"start": undefined}],
    //publishing stream items
    publish: ["stream", "key", "data", {"keys": null}, {"cache": null}, {"text": null}, {"json": null}],
    publishFrom: ["from", "stream", "key", "data", {"keys": null}, {"cache": null}, {"text": null}, {"json": null}],
    //managing stream and asset subscriptions
    subscribe: ["stream", {"rescan": true}],
    unsubscribe: ["stream", {"purge": false}],
    //querying subscribed assets
    getAssetTransaction: ["asset", "txid", {"verbose": false}],
    listAssetTransactions: ["asset", {"verbose": false}, {"count": 10}, {"start": startDefault}, {"local-ordering": false}],
    //querying stream items
    getStreamItem: ["stream", "txid", {verbose: false}],
    getTxOutData: ["txid", "vout"],
    listStreamBlockItems: ["stream", "txid", {"count": "MAX"}, {"start": null}],
    listStreamKeyItems: ["stream", "key", {"verbose": false}, {"count": 10}, {"start": startDefault}, {"local-ordering": false}],
    listStreamKeys: ["stream", {"key": "*"}, {"verbose": false}, {"count": 10}, {"start": startDefault}, {"local-ordering": false}],
    listStreamItems: ["stream", {"verbose": false}, {"count": 10}, {"start": startDefault}, {"local-ordering": false}],
    listStreamPublisherItems: ["stream", "address", {"verbose": false}, {"count": 10}, {"start": startDefault}, {"local-ordering": false}],
    listStreamPublishers: ["stream", {"address": "*"}, {"verbose": false}, {"count": 10}, {"start": startDefault}, {"local-ordering": false}],
    //unspent
    combineUnspent: [{"addresses": "*"}, {"minconf": 1}, {"maxcombines": 1}, {"mininputs": 10}, {"maxinputs": 100}, {"maxtime": 30}],
    listLockUnspent: [],
    listUnspent: [{"minconf": 1}, {"maxconf": 999999}, {"receivers": []}],
    lockUnspent: ["unlock", {"outputs": []}],
    //raw tx
    appendRawChange: ["hexstring", "address", {"native-fee": undefined}],
    appendRawData: ["tx", "data", {"cache": null}, {"text": null}, {"json": null}, {"for": null}, {"keys": null}, {"data": null}, {"options": null}],
    appendRawMetadata: ["tx", "data"],
    appendRawTransaction: ["tx", "inputs", "amounts", {"data": []}, {"action": ""}, {"cache": null}, {"text": null}, {"json": null}, {"for": null}, {"keys": null}, {"data": null}, {"options": null}],
    createRawTransaction: ["inputs", "amounts", {"data": []}, {"action": ""}, {"cache": null}, {"text": null}, {"json": null}, {"for": null}, {"keys": null}, {"data": null}, {"options": null}],
    createRawSendFrom: ["from", "amounts", {"data": []}, {"action": ""}, {"cache": null}, {"text": null}, {"json": null}, {"for": null}, {"keys": null}, {"data": null}, {"options": null}],
    decodeRawTransaction: ["hexstring"],
    sendRawTransaction: ["hexstring"],
    signRawTransaction: ["hexstring", {"parents": null}, {"privatekeys": null}, {"sighashtype": null}],
    //p2p
    addNode: ["ip", "command"],
    getAddedNodeinfo: ["verbose"],
    getNetworkInfo: [],
    getPeerInfo: [],
    ping: [],
    //messaging
    signMessage: ["address", "message"],
    verifyMessage: ["address", "signature", "message"],
    //blockchain query
    getBlock: ["hash", {"format": true}],
    getBlockchainInfo: [],
    getBlockHash: ["height"],
    getMempoolInfo: [],
    getRawMempool: [],
    getRawTransaction: ["txid", {"verbose": 0}],
    getTxOut: ["txid", "vout", {"unconfirmed": false}],
    listBlocks: ["blocks", {"verbose": false}],
    //advanced wallet control
    backupWallet: ["filename"],
    dumpPrivKey: ["address"],
    dumpWallet: ["filename"],
    encryptWallet: ["passphrase"],
    getWalletInfo: [],
    importPrivKey: ["privkey", {"label": ""}, {"rescan": true}],
    importWallet: ["filename"],
    walletLock: [],
    walletPassphrase: ["passphrase", "timeout"],
    walletPassphraseChange: ["old-passphrase", "new-passphrase"],
    //blockchain upgrading
    approveFrom: ["from", "upgrade", "approve"],
    //--create - under streams
    //--createFrom - under streams
    listUpgrades: [{"upgrades": "*"}],
    //advanced node control
    clearMempool: [],
    pause: ["tasks"],
    resume: ["tasks"],
    setLastBlock: ["hash"],
    //mining
    getMiningInfo: [],

    //v2.0 Alpha //-- https://www.multichain.com/developers/multichain-2-0-preview-releases/
    getstreamkeysummary: ["stream", "key", {"mode": "jsonobjectmerge" }],
    getstreampublishersummary: ["stream", "address", "mode"],
    liststreamqueryitems: ["stream", "query", {"verbose": false}],
    liststreamtxitems: ["stream", "txid", {"verbose": false}],
    createbinarycache: [],
    appendbinarycache: ["identifier", {data: null}],
    deletebinarycache: ["identifier"],
    getchunkqueueinfo: [],
    getchunkqueuetotals: [],
    getassetinfo: ["asset", {"verbose": false}],
    getstreaminfo: ["stream", {"verbose": false}],
    getlastblockinfo: [{"skip": 0}],
    verifypermission: ["address", "permission"],
    testtxfilter: ["restrictions", "js-code", "tx"],
    listtxfilters: [{"filters": "*"}, {"verbose": false}],
    getfiltercode: ["filter"],
    runtxfilter: ["filter", "tx"],

}

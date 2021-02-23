[@inline]
let claim = (storage: storage): (list(operation), storage) => {
    let storage = updatePool(storage);

    let userReward = calculateReward(Tezos.sender, storage);
    
    let unpaidRewards = safeBalanceSubtraction(storage.claimedRewards.unpaid, userReward);
    let storage = setUnpaidRewards(unpaidRewards, storage);

    let paidRewards = storage.claimedRewards.paid + userReward;
    let storage = setPaidRewards(paidRewards, storage);

    let tokenTransferOperation = transfer(
        Tezos.self_address, // from
        Tezos.sender, // to
        userReward, // value
        storage.stkrTokenContract // tzip7 contract's address
    );
 
    ([tokenTransferOperation], storage);
};

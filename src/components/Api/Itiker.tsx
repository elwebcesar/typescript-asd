import React, { useState, useEffect } from 'react';

import { ITiker } from './interface/itiker';

import getTickers from './getTickers';
import Modal from '../Modal/Modal';
import SkeletonTable from '../Skeleton/SkeletonTable';
import TableSortable from '../Tables/TableSortable';


export default function Itiker() {
  const [data, setData] = useState<ITiker[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const getTickersFromApi = async (): Promise<void> => {

    await getTickers()
      .then(response => {
        if (response && response.message) {
          setError(true);
        } else {
          setData(response.data);
          setIsLoading(false);
        }
      })
      .catch (error =>  {
        console.log(error);
        setIsLoading(false);
        setError(true);
      })
  }

  useEffect(() => {
    getTickersFromApi();
  }, []);

  // reolad button
  const handleReload = () => {
    setIsLoading(true);
    setError(false);
    setData([]);
    getTickersFromApi();
  };

  // Modal
  const [modalNoAccess, setModalNoAccess] = useState(false);

  const handleCloseModalNoAccess = () => {
    setModalNoAccess(false);
    handleReload();
  }

  // Items table - title display in table and to skeleton
  const itemsTable = ['symbol', 'quoteAsset', 'openPrice', 'lowPrice', 'highPrice', 'lastPrice', 'at'];
  const totalRowsTable = 20;
  
  // Make array and filter data
  const filteredData = data.map(({ symbol, quoteAsset, openPrice, lowPrice, highPrice, lastPrice, at }) => [
    symbol, 
    quoteAsset, 
    openPrice, 
    lowPrice, 
    highPrice, 
    lastPrice, 
    new Date(at).toLocaleDateString('en-GB')
  ]);


  if (isLoading) {
    // return <p>Loading...</p>;
    return <SkeletonTable headers={itemsTable.length} rows={totalRowsTable} />
  }

  if (error) {
    return (
      <>
        <Modal
          message={'<h3>Lo sentimos :(</h3><p>Error al cargar los datos.</p>'}
          onClose={handleCloseModalNoAccess}
          handleReload={handleReload}
        />
        <SkeletonTable
          headers={itemsTable.length}
          rows={totalRowsTable}
        />
        {/* <p>Loading...</p>
        <button onClick={handleReload}>Reload</button> */}
      </>
    );
  }

  return (
    <>
      <TableSortable
        headers={itemsTable}
        rows={filteredData}
      />

      {/* <table>
        <caption>Tickers</caption>
        <thead>
          <tr>
            <th scope="col">symbol</th>
            <th scope="col">quoteAsset</th>
            <th scope="col">openPrice</th>
            <th scope="col">lowPrice</th>
            <th scope="col">highPrice</th>
            <th scope="col">lastPrice</th>
            <th scope="col">at</th>
          </tr>
        </thead>
        <tbody>
          {
          data.map((tiker: ITiker, index: number) => (
            <tr key={index}>
              <td data-label="symbol">{tiker.symbol}</td>
              <td data-label="quoteAsset">{tiker.quoteAsset}</td>
              <td data-label="openPrice">{tiker.openPrice}</td>
              <td data-label="lowPrice">{tiker.lowPrice}</td>
              <td data-label="highPrice">{tiker.highPrice}</td>
              <td data-label="lastPrice">{tiker.lastPrice}</td>
              {/* <td data-label="at">{tiker.at}</td> *}
              <td data-label="at">{new Date(tiker.at / 1000).toLocaleDateString('en-GB')}</td>
            </tr>
          ))
          }
        </tbody>
      </table> */}

      {/* {
      data.map((tiker: ITiker, index: number) => (
        <div key={index}>
          <p>Symbol: {tiker.symbol}</p>
          <p>Base asset: {tiker.baseAsset}</p>
          <p>Quote asset: {tiker.quoteAsset}</p>
          <p>Open price: {tiker.openPrice}</p>
          <p>Low price: {tiker.lowPrice}</p>
          <p>High price: {tiker.highPrice}</p>
          <p>Last price: {tiker.lastPrice}</p>
          <p>Volume: {tiker.volume}</p>
          <p>Bid price: {tiker.bidPrice}</p>
          <p>Ask price: {tiker.askPrice}</p>
          <p>At: {tiker.at}</p>
        </div>
      ))
      } */}
    </>
  )
}

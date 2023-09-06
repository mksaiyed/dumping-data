import React from "react";
import "./service.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const ServiceComp = () => {
    return (
        <>
            <div class="wrapper">
                <h1 style={{ marginTop: "150px" }}>OUR SERVICES</h1>
                <h3>
                    Dumping Data is a web-based platform that provides a wide
                    range of services to exporters and importers in India.
                </h3>
                <div class="content-box">
                    <div class="card">
                        <i class="fa-solid fa-earth-asia fa-2x"></i>
                        <h2>Export Import Data Bank (EXIMDB)</h2>
                        <p>
                            The EXIMDB is a comprehensive database of trade data
                            that includes information on exports, imports, trade
                            partners, and commodities. The data is updated on a
                            monthly basis and can be accessed by exporters and
                            importers to track trade trends and identify new
                            market opportunities.
                        </p>
                    </div>
                    <div class="card">
                        <i class="fa-solid fa-chart-line fa-2x"></i>
                        <h2>Trade Statistics</h2>
                        <p>
                            The (EXIMDB) also provides access to trade
                            statistics that are compiled by the Ministry of
                            Commerce and Industry. The statistics include
                            information on the value of exports and imports, the
                            volume of trade, and the trade balance.
                        </p>
                    </div>
                    <div class="card">
                        <i class="fa-solid fa-signal fa-2x"></i>
                        <h2>Export Promotion Schemes </h2>
                        <p>
                            The EDP provides information on export promotion
                            schemes that are offered by the government of India.
                            These schemes offer a variety of benefits to
                            exporters, such as duty drawbacks, export
                            incentives, and market access assistance.
                        </p>
                    </div>
                    <div class="card">
                        <i class="fa-regular fa-file fa-2x"></i>
                        <h2>Customs Documentation </h2>
                        <p>
                            The EDP provides information on customs
                            documentation that is required for exporting and
                            importing goods. This information includes the types
                            of documents that are required, the format of the
                            documents, and the procedures for submitting the
                            documents.
                        </p>
                    </div>
                    <div class="card">
                        <i class="fa-solid fa-file-pen fa-2x"></i>
                        <h2>Trade Agreements </h2>
                        <p>
                            The EDP provides information on trade agreements
                            that are signed by India with other countries. These
                            agreements can provide exporters with preferential
                            market access in other countries.
                        </p>
                    </div>
                    <div class="card">
                        <i class="fa-regular fa-money-bill-1 fa-2x"></i>
                        <h2>Foreign Buyers </h2>
                        <p>
                            The EDP provides a directory of foreign buyers who
                            are interested in sourcing goods from India. This
                            directory can be used by exporters to identify
                            potential buyers for their products.
                        </p>
                    </div>
                    <div class="card">
                        <i class="fa-solid fa-database fa-2x"></i>
                        <h2>Data Analytics </h2>
                        <p>
                            Data analytics can help businesses to make better
                            decisions by providing them with insights into their
                            data. This can help businesses to identify
                            opportunities, avoid risks, and improve their bottom
                            line.
                        </p>
                    </div>
                    <div class="card">
                        <i class="fa-solid fa-feather fa-2x"></i>
                        <h2>Other Features</h2>
                        <p>
                            • A user-friendly interface that makes it easy to
                            search and navigate the data.
                        </p>
                        <p>
                            • The ability to download data in a variety of
                            formats, including Excel, CSV, and PDF.
                        </p>
                    </div>
                    <div class="card">
                        <i class="fa-solid fa-feather fa-2x"></i>
                        <h2>Other Features</h2>
                        <p>
                            • The ability to create custom reports based on the
                            data.
                        </p>
                        <p>
                            • The ability to subscribe to email alerts that
                            notify users of new data releases or changes to the
                            data.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceComp;

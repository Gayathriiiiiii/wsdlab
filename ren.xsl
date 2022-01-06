<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
		<!-- TODO: Auto-generated template -->
		<html>
		<head>
		</head>
		<body>
		<h1 style="text-align:center">Customers Info</h1>
		<table border="2" align="center">
		<tr>
		<th>Name</th>
		<th>Date</th>
		<th>Address</th>
        <th>Renovation-Type</th>
		<th>Designtype</th>
		<th>Budget</th>
        <th>Status</th>
		<th>Area</th>
		</tr>
		<xsl:for-each select="RenovationManiac/Customer">
		<xsl:sort select="Date"></xsl:sort>
		<xsl:if test="Budget &gt; 50000">
		<tr>
		<td>
		<xsl:value-of select="Name"></xsl:value-of>
		</td>
        <td>
        <xsl:value-of select="Date"></xsl:value-of>
        </td>
		<td>
		<xsl:value-of select="Address"></xsl:value-of>
		</td>
		<td>
		<xsl:value-of select="Renovation-Type"></xsl:value-of>
		</td>
        <td>
		<xsl:value-of select="Designtype"></xsl:value-of>
		</td>
        <td>
        <xsl:value-of select="Budget"></xsl:value-of>
        </td>
        <td>
            <xsl:value-of select="Status"></xsl:value-of>
            </td>
        <td>
        <xsl:value-of select="Area"></xsl:value-of>
        </td>
        
		</tr>
		</xsl:if>
		</xsl:for-each>
		</table>
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>